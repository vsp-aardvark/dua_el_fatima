import { CollectionConfig } from 'payload'
import { slugField } from '@/common/fields/slug'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sortOrder', 'slug'],
    listSearchableFields: ['title', 'sortOrder'],
  },
  defaultPopulate: {
    title: true,
    slug: true,
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
  ],
}

export default Categories
