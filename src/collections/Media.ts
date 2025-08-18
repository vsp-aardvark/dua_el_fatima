import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Administrative',
  },
  access: {
    read: () => true,
    create: () => true,
    update: authenticated,
    delete: authenticated,
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
          const uniqueId = crypto.randomUUID()
          req.file.name = uniqueId + req.file.name
        }
      },
    ],
  },
}
