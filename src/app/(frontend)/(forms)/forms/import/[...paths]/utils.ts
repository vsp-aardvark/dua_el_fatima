import path from 'path'
import * as fs from 'fs'
import { DateTime } from 'luxon'
import type { RequiredDataFromCollectionSlug } from 'payload'
import { LyricExtractor } from '@/utils/lyric-extractor'
import { textToLexical } from '@/utils/text-lexical'
import { formatSlug } from '@/common/fields/slug/formatSlug'
import uuid from '@/common/utils/uuid'

/**
 * Looping through folders with lyrics files in it
 * @param data
 * @param rawData
 * @param dir_path
 * @param extractor
 * @param onSave
 */
export const loopFolderStructure = async (
  data: Record<string, any>,
  rawData: Record<string, any>,
  dir_path: string,
  extractor: LyricExtractor,
  onSave: (poem: RequiredDataFromCollectionSlug<'poems'>) => Promise<any>,
) => {
  const errors = []

  for (let i = 0; i < data.folders.length; i++) {
    const subjectValue = rawData[`subject${i}`]
    const groupedValue = rawData[`group${i}`]

    if (subjectValue == undefined || !subjectValue) {
      console.log(`Subject at ${i} not found`)
      continue
    }

    const folderPath = path.join(dir_path, data.folders[i])
    const files = fs.readdirSync(folderPath)

    for (const file of files) {
      try {
        const content = await extractor.parseFromPath(path.join(folderPath, file))
        if (!content) {
          console.log(`Content not found. Please try again. for ${folderPath}/${file}`)
        } else {
          const poem = await onSave({
            title: file.toUpperCase(),
            subject: subjectValue,
            category: data.category,
            group: data.group,
            grouped: groupedValue || null,
            content: textToLexical(content),
            //
            _status: 'published',
            publishedAt: DateTime.utc().toISO(),
            slug: formatSlug(file.trim() ?? uuid()),
          })

          console.log('✅ SAVED Lyrics data', poem.title, data.folders[i], `${file}`)
        }
      } catch (e: Error | any) {
        console.log(`Error Saving ${file}`, folderPath, e.message)
        console.error(e)
        errors.push(e)
      }
    }
    //loop through the files and insert into
  }

  return errors
}

/**
 * Looping through lyrics in direct files not folders.
 * @param data
 * @param rawData
 * @param dir_path
 * @param extractor
 * @param onSave
 */
export const loopFileStructure = async (
  data: Record<string, any>,
  rawData: Record<string, any>,
  dir_path: string,
  extractor: LyricExtractor,
  onSave: (poem: RequiredDataFromCollectionSlug<'poems'>) => Promise<any>,
) => {
  const errors = []

  for (let i = 0; i < data.folders.length; i++) {
    const subjectValue = rawData[`subject${i}`]
    const groupedValue = rawData[`group${i}`]

    if (subjectValue == undefined || !subjectValue) {
      console.log(`Subject at ${i} not found`)
      continue
    }

    const fileName = data.folders[i]
    const filePath = path.join(dir_path, fileName)

    try {
      const content = await extractor.parseFromPath(filePath)
      if (!content) {
        console.log(`Content not found. Please try again. for ${filePath}`)
      } else {
        const poem = await onSave({
          title: fileName.toUpperCase(),
          subject: subjectValue,
          category: data.category,
          group: data.group,
          grouped: groupedValue || null,
          content: textToLexical(content),
          //
          _status: 'published',
          publishedAt: DateTime.utc().toISO(),
          slug: formatSlug((fileName as string).replace(' ', '-').trim() ?? uuid()) + uuid(),
        })

        console.log('✅ SAVED Lyrics data', poem.title, fileName)
      }
    } catch (e: Error | any) {
      console.log(`Error Saving`, filePath, e.message)
      console.error(e)
      errors.push(e)
    }
    //
  }

  return errors
}
