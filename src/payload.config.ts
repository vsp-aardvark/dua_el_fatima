import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { searchPlugin } from '@payloadcms/plugin-search'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import Categories from '@/collections/Categories'
import Subjects from '@/collections/Subjects'
import Posts from '@/collections/Posts'
import Alerts from '@/collections/Alerts'
import { s3Storage } from '@payloadcms/storage-s3'
import EventDrafts from '@/collections/Drafts/EventDrafts'
import PoemDrafts from '@/collections/Drafts/PoemDrafts'
import Devices from '@/collections/Extra/Device'
import Suggestions from '@/collections/Suggestions'
import Groups from '@/collections/Posts/Groups'
import Notifications from '@/collections/Notifications'
import Folders from './collections/Folder'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const storage = s3Storage({
  signedDownloads: true,
  collections: {
    media: true,
  },
  bucket: process.env.S3_BUCKET ?? '',
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY ?? '',
    },
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT ?? '',
    forcePathStyle: true,
  },
})

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [
    Subjects,
    Categories,
    Posts,
    Alerts,
    Media,
    Users,
    EventDrafts,
    PoemDrafts,
    Devices,
    Suggestions,
    Groups,
    Notifications,
    Folders
  ],
  sharp,
  plugins: [
    payloadCloudPlugin(),
    storage,
    searchPlugin({
      collections: ['poems'],
      // collections: ['poems', 'subjects', 'categories', 'groups'],
      defaultPriorities: {
        poems: 10,
        subjects: 30,
      },
      searchOverrides: {
        fields: ({ defaultFields }) => [
          ...defaultFields,
          {
            name: 'tags',
            type: 'text',
            admin: {
              position: 'sidebar',
            },
            required: false,
          },
          {
            name: 'subject',
            type: 'relationship',
            relationTo: 'subjects',
            admin: {
              position: 'sidebar',
            },
            required: false,
          },
          {
            name: 'category',
            type: 'relationship',
            admin: {
              position: 'sidebar',
            },
            relationTo: 'categories',
            required: false,
          },
        ],
      },
      beforeSync: ({ originalDoc, searchDoc }) => ({
        ...searchDoc,
        // - Modify your docs in any way here, this can be async
        // - You also need to add the `category` & `subject` field in the `searchOverrides` config
        ...(searchDoc.doc.relationTo == 'poems'
          ? {
              subject: originalDoc.subject,
              category: originalDoc.category,
            }
          : {}),
        ...(searchDoc.doc.relationTo == 'subjects'
          ? {
              tags: originalDoc.tags,
            }
          : {}),
      }),
    }),
  ],
})
