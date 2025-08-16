'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { redirect, RedirectType } from 'next/navigation'
import { formatSlug } from '@/common/fields/slug/formatSlug'
import { DateTime } from 'luxon'

export async function transferDraftPost(path: string, _: Record<string, any> = {}) {
  const payload = await getPayload({ config })

  // ['',admin,collections,<type>,<id>]
  const segments = path.split('/')
  const id: string = segments.at(4)?.toString() ?? ''

  if (segments.at(3) === 'poems-drafts') {
    //
    const poemDraft = await payload.findByID({
      collection: 'poems-drafts',
      id: id,
      depth: 0,
    })

    if (!poemDraft) {
      console.error(`No drafts found id:${id}`)
      throw new Error(`No draft with id ${id}`)
    }

    if (poemDraft.isGroup) {
      //
      const oldPoem = await payload.findByID({
        collection: 'poems',
        id: poemDraft.isGroup as string,
        depth: 0,
        select: {
          id: true,
          poem: true,
        },
      })

      const subPoem = await payload.create({
        collection: 'subpoems',
        data: {
          title: poemDraft.title,
          // @ts-ignore
          content: poemDraft.content,
          slug: formatSlug(poemDraft.title),
          _status: 'published',
          publishedAt: DateTime.utc().toISO({}),
        },
      })

      const existingGroups = (oldPoem.poem ?? []) as string[]
      existingGroups.push(subPoem.id)

      const newPoem = await payload.update({
        collection: 'poems',
        id: oldPoem.id,
        data: {
          poem: existingGroups,
        },
        depth: 0,
      })

      //
    } else {
      await payload.create({
        collection: 'poems',
        data: {
          title: poemDraft.title,
          slug: formatSlug(poemDraft.title),
          content: poemDraft.content,
          subject: poemDraft.subject,
          category: poemDraft,
          //
          _status: 'published',
          publishedAt: DateTime.utc().toISO(),
        },
      })
    }

    //
  } else if (segments.at(3) === 'event-drafts') {
    //
    const eventDraft = await payload.findByID({
      collection: 'event-drafts',
      id: id,
    })

    if (!eventDraft) {
      console.error(`No event drafts found id:${id}`)
      throw new Error('No event draft with id ' + id)
    }

    const alert = await payload.create({
      collection: 'alerts',
      data: {
        title: eventDraft.title,
        dateAt: eventDraft.dateAt,
        message: eventDraft.message,
        media: eventDraft.media,
        link: eventDraft.link,
        _status: 'published',
      },
    })

    if (alert) {
      try {
        const result = await payload.delete({
          collection: 'event-drafts',
          id: id, // required
          depth: 2,
        })
        console.log(`EventDraft deleted id:${result.id} ${result}`)
      } catch (e: Error | any) {
        console.error(e)
      }

      segments[4] = alert.id
      segments[3] = 'alerts'

      redirect(segments.join('/'), RedirectType.replace)
    }

    throw new Error(`Event schedule not created.`)
    //
  }
  console.error('No such collection handled')
}
