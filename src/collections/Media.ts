import type { CollectionConfig } from 'payload'

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
          const uniqueId = crypto.randomUUID()
          req.file.name = uniqueId + req.file.name
        }
      },
    ],
  },
}
