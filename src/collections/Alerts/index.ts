import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

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
        },
      ],
    },
    {
      type: 'text',
      name: 'link',
      required: false,
      label: 'Custom Link for message (Link to WhatsApp, Google, or Twitter)',
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
