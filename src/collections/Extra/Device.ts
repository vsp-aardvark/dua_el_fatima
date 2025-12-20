import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

const Devices: CollectionConfig = {
  labels: {
    singular: 'Device',
    plural: 'Devices',
  },
  slug: 'devices',
  admin: {
    useAsTitle: 'deviceId',
    group: 'Administrative',
  },
  access: {
    read: anyone,
    create: anyone,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      label: 'DeviceId',
      name: 'deviceId',
      type: 'text',
      required: true,
      index: true,
      unique: true,
    },
    {
      label: 'Brand',
      name: 'brand',
      type: 'text',
      required: true,
    },
    {
      label: 'Model',
      name: 'model',
      type: 'text',
      required: true,
    },
    {
      label: 'Identifier',
      name: 'identifier',
      type: 'text',
      required: true,
    },
    {
      label: 'Version',
      name: 'version',
      type: 'text',
      required: true,
    },
    {
      label: 'Device Hash',
      name: 'hash',
      type: 'text',
      required: false,
    },
    {
      label: 'Info',
      name: 'info',
      type: 'text',
      required: false,
    },
    {
      label: 'Last Seen',
      name: 'lastUsedAt',
      type: 'date',
      required: false,
    },
    {
      label: 'Last Seen Info',
      name: 'lastSeenInfo',
      type: 'text',
      required: false,
    },
    {
      label: 'Push Token',
      name: 'token',
      type: 'text',
      required: false,
    },
  ],
  defaultSort: ['updatedAt', 'createdAt'],
  hooks: {
    beforeChange: [
      async ({ data, operation, req }) => {
        if (operation !== 'create') return data

        const existing = await req.payload.find({
          collection: 'devices',
          where: {
            deviceId: { equals: data.deviceId },
          },
          select: {
            deviceId: true,
            id: true,
          },
          limit: 1,
        })

        if (existing.docs.length > 0) {
          await req.payload.update({
            collection: 'devices',
            id: existing.docs[0].id,
            data,
          })

          return false
          // cancel create
        }

        return data
      },
    ],
  },
}

export default Devices
