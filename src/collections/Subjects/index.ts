import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from '@/common/fields/slug'

const Subjects: CollectionConfig = {
  slug: 'subjects',
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title', 'sortOrder'],
    defaultColumns: ['title', 'sortOrder', 'slug'],
  },
  orderable: true,
  trash: true,
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
    },
    {
      name: 'description',
      type: 'textarea',
    },
    ...slugField(),
    {
      name: 'sortOrder',
      type: 'number',
      required: false,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'poems', // reverse relation
      type: 'join',
      collection: 'poems',
      on: 'subject',
    },
  ],
}

export default Subjects
