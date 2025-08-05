import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Viewer',
          value: 'user',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      defaultValue: 'admin',
      required: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
