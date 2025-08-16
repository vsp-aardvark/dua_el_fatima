import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { adminOnly } from '@/access/adminOnly'

const EventDrafts: CollectionConfig = {
  slug: 'event-drafts',
  labels: {
    singular: 'Schedule',
    plural: 'Schedules',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Drafts',
    components: {
      edit: {
        SaveButton: '@/common/components/SubmitSaveButton',
        beforeDocumentControls: [
          '@/common/components/RejectButton',
          '@/common/components/TransferButton',
        ],
      },
    },
  },
  access: {
    read: anyone,
    create: anyone,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
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
      type: 'text',
      name: 'link',
      required: false,
      label: 'Custom Link for message (Link to WhatsApp, Google, or Twitter)',
    },
    {
      label: 'Event Type | Schedule Type',
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
      admin: {
        position: 'sidebar',
      },
    },
  ],
  orderable: true,
}

export default EventDrafts
