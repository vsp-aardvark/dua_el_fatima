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
    group: 'Personality',
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
    {
      type: 'checkbox',
      label: 'Groh or Anjuman?',
      name: 'group',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'checkbox',
      label: 'Hidden',
      name: 'hidden',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'text',
      label: 'Tags',
      name: 'tags',
      required: false,
      defaultValue: 'all',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Categories
