'use server'

import { z } from 'zod'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { redirect } from 'next/navigation'

const schema = z.object({
  title: z.string(),
  datetime: z.date(),
  venueType: z.string(),
  venue: z.string().optional(),
  adj: z.string().optional(),
})

export default async function createElaan(formData: Record<string, any>) {
  //'title', 'datetime', 'venueType', 'venue'
  const validatedFields = schema.safeParse(formData)

  // Return early if the form data is invalid
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
    const elaan = await payload.create({
      collection: 'event-drafts',
      data: {
        title: data.title,
        dateAt: data.datetime.toISOString().split('T')[0],
        timeAt: data.datetime.toISOString().split('T')[1] + (data.adj ?? '0'),
        // @ts-ignore
        type: data.title,
        message: data.venueType,
        venue0: data.venue,
      },
    })
    console.log('Elaan data', elaan.title)

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
