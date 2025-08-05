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
      name: 'message',
      type: 'text',
      required: true,
    },
    {
      name: 'expiresAt',
      type: 'date',
      required: true,
    },
    {
      name: 'subject',
      type: 'relationship',
      relationTo: 'subjects',
      required: false,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
    },
    {
      name: 'poem',
      type: 'relationship',
      relationTo: 'poems',
      required: false,
    },
  ],
}

export default Alerts
