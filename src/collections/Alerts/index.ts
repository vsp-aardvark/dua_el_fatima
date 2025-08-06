import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

const Alerts: CollectionConfig = {
  slug: 'alerts',
  admin: {
    useAsTitle: 'message',
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
      type:"tabs",
      tabs : [
        {
          label :"Message",
          fields :[
            {
              name: 'message',
              type: 'text',
              required: false,
              label: 'Message | Notification Body'
            },
          ]
        },
        {
          label :"Media",
          fields : [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Media | Image | Document',
            },
          ]
        }
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'expiresAt',
          type: 'date',
          required: false,
          label: 'Expiry Date, if there is one',
        },
      ],
    },
    {
      type: 'text',
      name: 'link',
      required: false,
      label: 'Link for message',
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
}

export default Alerts
