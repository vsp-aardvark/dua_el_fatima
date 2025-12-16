'use server'

import { z } from 'zod'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { redirect } from 'next/navigation'
import { join } from 'pathe'
import * as fs from 'node:fs'
import { LyricExtractor } from '@/utils/lyric-extractor'
import { appConfig } from '@/utils/app-config'
import {
  loopFileStructure,
  loopFolderStructure,
} from '@/app/(frontend)/(forms)/forms/import/[...paths]/utils'

const schema = z.object({
  category: z.string(),
  //folders
  // files
  type: z.string(),
  group: z.string().optional(),
  path: z.array(z.string()),
  folders: z.array(z.string()),
})

export default async function importLyrics(formData: Record<string, any>) {
  const validatedFields = schema.safeParse(formData)

  if (!validatedFields.success) {
    console.log('Errors', z.treeifyError(validatedFields.error).errors)
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
  const dir_path = join(
    ROOT_PATH,
    'public/zikr/lyrics',
    data.path.map((e) => decodeURIComponent(e)).join('/'),
  )

  if (!fs.existsSync(dir_path)) {
    console.log('⚠️ Directory does not exist.')
    return {
      errors: [],
      message: 'Submission failed. Please try again.',
    }
  }

  //loop for the provided data
  const extractor = new LyricExtractor()

  const errors =
    data.type === 'folders'
      ? await loopFolderStructure(data, formData, dir_path, extractor, async (poem) => {
          return await payload.create({
            collection: 'poems',
            data: poem,
          })
        })
      : await loopFileStructure(data, formData, dir_path, extractor, async (poem) => {
          return await payload.create({
            collection: 'poems',
            data: poem,
          })
        })

  try {
    redirect(`/forms/done?errors=${errors.length}`)
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
  //
}
