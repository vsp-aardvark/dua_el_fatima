'use server'

import { z } from 'zod'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { redirect } from 'next/navigation'

const schema = z.object({
  title: z.string(),
  subject: z.string(),
  category: z.string(),
  group: z.string().optional(),
  editor: z.any(),
})

export default async function createDraft(formData: FormData) {
  const body: Record<string, any> = {}
  formData.forEach((value, key) => {
    if (key.includes('[]')) {
      const strippedKey = key.replace('[]', '')
      if (body[strippedKey]) {
        body[strippedKey] = [...body[strippedKey], value]
      } else {
        body[strippedKey] = [value]
      }
    } else {
      body[key] = value
    }
  })

  const validatedFields = schema.safeParse(body)

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

  try {
    const draft = await payload.create({
      collection: 'poems-drafts',
      data: {
        title: data.title,
        subject: data.subject,
        category: data.category,
        group: data.group,
        content: typeof data.editor == 'string' ? JSON.parse(data.editor) : data.editor,
        media: body.files ?? undefined,
      },
    })

    console.log('Draft data', draft.title)

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
