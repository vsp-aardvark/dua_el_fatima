import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { adminOnly } from '@/access/adminOnly'
import { authenticated } from '@/access/authenticated'

const Suggestions: CollectionConfig = {
  slug: 'suggestions',
  labels: {
    singular: 'Suggestion or Inquiry',
    plural: 'Suggestions or Inquiries',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'contact'],
  },
  defaultPopulate: {
    name: true,
  },
  orderable: true,
  access: {
    read: authenticated,
    create: anyone,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      required: false,
      label: 'Email Address',
    },
    {
      name: 'contact',
      type: 'text',
      required: false,
      label: 'Phone Number',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message or Suggestion or Inquiry',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Attachments',
    },
  ],
}

export default Suggestions
