import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

// function utilGetDateTimeFromString(data: string, index: number) {
//   console.debug(`Current date ${data} before processing index:${index}`)
//   const match = data.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})/)
//   if (match) {
//     return match[index]
//   }
//   return ''
// }

const Alerts: CollectionConfig = {
  labels: {
    singular: 'Elaan',
    plural: 'Elaan',
  },
  slug: 'alerts',
  admin: {
    useAsTitle: 'title',
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
      label: 'Elaan',
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Majlis',
          value: 'Majlis',
        },
        {
          label: 'Jashan',
          value: 'Jashan',
        },
        {
          label: 'Amaal',
          value: 'Amaal',
        },
      ],
      defaultValue: 'Majlis',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      label: 'Title',
      hidden: true,
    },
    {
      name: 'dateAt',
      type: 'date',
      required: true,
      label: 'Ba Tareeq',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'timeAt',
      type: 'date',
      required: false,
      label: 'Ba WaQt',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
        },
      },
    },
    {
      name: 'message',
      type: 'text',
      required: false,
      label: 'Ba MuQaam',
    },
    //
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Mutamanni | Bani -e- Majlis',
          fields: [
            {
              name: 'venue0',
              type: 'text',
              required: false,
              label: 'Bani -e- Majlis',
            },
          ],
        },
        {
          label: 'Mutamanni | Bani -e- Jashan',
          fields: [
            {
              name: 'venue01',
              type: 'text',
              required: false,
              label: 'Bani -e- Jashan',
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Upload Image | Banner | Ad',
    },
    {
      type: 'text',
      name: 'link',
      required: false,
      label: 'Deep Link for Elaan (WhatsApp, Google, or Facebook)',
      admin: {
        position: 'sidebar',
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
