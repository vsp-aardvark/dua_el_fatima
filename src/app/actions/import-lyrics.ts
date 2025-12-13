'use server'

import { z } from 'zod'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { redirect } from 'next/navigation'
import { join } from 'pathe'
import * as fs from 'node:fs'
import path from 'path'
import { LyricExtractor } from '@/utils/lyric-extractor'
import { textToLexical } from '@/utils/text-lexical'
import { DateTime } from 'luxon'
import { formatSlug } from '@/common/fields/slug/formatSlug'
import { appConfig } from '@/utils/app-config'

const schema = z.object({
  category: z.string(),
  group: z.string().optional(),
  path: z.array(z.string()),
  folders: z.array(z.string()),
})

export default async function importLyrics(formData: Record<string, any>) {
  const validatedFields = schema.safeParse(formData)

  if (!validatedFields.success) {
    console.log('Errors', validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Submission failed. Please try again.',
    }
  }

  const data = validatedFields.data

  const payload = await getPayload({
    config: configPromise,
  })

  //check folder exists
  const ROOT_PATH = appConfig.ROOT_PATH
  const dir_path = join(ROOT_PATH, 'public/zikr/lyrics', data.path.join('/'))

  if (!fs.existsSync(dir_path)) {
    console.log('⚠️ Directory does not exist.')
    return {
      errors: [],
      message: 'Submission failed. Please try again.',
    }
  }

  //loop for the provided data
  const errors = []
  const extractor = new LyricExtractor()

  for (let i = 0; i < data.folders.length; i++) {
    const subjectValue = formData[`subject${i}`]

    if (subjectValue == undefined || !subjectValue) {
      console.log(`Subject at ${i} not found`)
      continue
    }

    const folderPath = join(dir_path, data.folders[i])
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
      try {
        const content = await extractor.parseFromPath(path.join(folderPath, file))
        if (!content) {
          console.log(`Content not found. Please try again. for ${folderPath}/${file}`)
        } else {
          const poem = await payload.create({
            collection: 'poems',
            data: {
              title: file.toUpperCase(),
              subject: subjectValue,
              category: data.category,
              group: data.group,
              content: textToLexical(content),
              //
              _status: 'published',
              publishedAt: DateTime.utc().toISO(),
              slug: formatSlug(file.toUpperCase()),
            },
          })
          console.log('✅ SAVED Lyrics data', poem.title, `${file} - ${content}`)
        }
      } catch (e) {
        console.error(e)
        errors.push(e)
      }
    }
    //loop through the files and insert into
  }

  try {
    if (errors.length > 0) {
      console.error(errors)
      throw new Error(`${errors.length} errors found.`)
    }
    redirect('/forms/done')
  } catch (e: any) {
    if (e?.message === 'NEXT_REDIRECT' || e == 'NEXT_REDIRECT') {
      // Re-throw to allow Next.js handling the redirect
      throw e
    }

    console.error('Error Payload', e)
    return {
      errors: [],
      message: 'Submission failed. Please try again.',
    }
  }
}
