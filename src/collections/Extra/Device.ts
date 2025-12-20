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
}

export default Devices
