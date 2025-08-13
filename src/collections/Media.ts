import type { CollectionConfig } from 'payload'
import { useUniqueId } from '@dnd-kit/utilities'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Administrative',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
    adapter: 's3',
  },
  hooks: {
    beforeOperation: [
      ({ req, operation, context, collection }) => {
        console.log(
          `beforeOperation:context -> ${JSON.stringify(context)} -> ${operation} collection${collection}`,
        )
        if ((operation === 'create' || operation === 'update') && req.file) {
          req.file.name = useUniqueId('') + req.file.name
        }
      },
    ],
  },
}
