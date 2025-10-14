import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { adminOnly } from '@/access/adminOnly'

const EventDrafts: CollectionConfig = {
  slug: 'event-drafts',
  labels: {
    singular: 'Elaan',
    plural: 'Elaan',
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
      hidden: true,
    },
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
  orderable: true,
}

export default EventDrafts
