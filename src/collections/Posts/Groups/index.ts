import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { slugField } from '@/common/fields/slug'

const Groups: CollectionConfig<'groups'> = {
  slug: 'groups',
  labels: {
    singular: 'Anjuman',
    plural: 'Anjumans',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Poems',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  trash: true,
  orderable: true,
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
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Book Cover',
    },
    //sidebar
    ...slugField(),
  ],
}

export default Groups
