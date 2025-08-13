import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

function utilGetDateTimeFromString(data: string, index: number) {
  console.debug(`Current date ${data} before processing index:${index}`)
  const match = data.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/)
  if (match) {
    return match[index]
  }
  return ''
}

const Alerts: CollectionConfig = {
  slug: 'alerts',
  admin: {
    useAsTitle: 'message',
    group: 'Events',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Message',
          fields: [
            {
              name: 'message',
              type: 'text',
              required: false,
              label: 'Message | Notification Body',
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Media | Image | Document',
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'dateAt',
          type: 'date',
          required: true,
          label: 'Event Date of happening',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
    {
      type: 'text',
      name: 'link',
      required: false,
      label: 'Custom Link for message (Link to WhatsApp, Google, or Twitter)',
    },
    {
      label: 'Date',
      name: 'date',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
        //hidden: true,
      },
      defaultValue: '',
      hooks: {
        beforeChange: [({ data }) => utilGetDateTimeFromString((data?.dateAt || '').trim(), 1)],
        beforeValidate: [({ data }) => utilGetDateTimeFromString((data?.dateAt || '').trim(), 1)],
      },
    },
    {
      label: 'Time',
      name: 'time',
      type: 'text',
      admin: {
        readOnly: true,
        position: 'sidebar',
        //hidden: true,
      },
      defaultValue: '',
      hooks: {
        beforeChange: [({ data }) => utilGetDateTimeFromString((data?.dateAt || '').trim(), 2)],
        beforeValidate: [({ data }) => utilGetDateTimeFromString((data?.dateAt || '').trim(), 2)],
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        // We set this interval for optimal live preview
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
  orderable: true,
}

export default Alerts
