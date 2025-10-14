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
import SubPoems from '@/collections/Posts/Sub'
import { s3Storage } from '@payloadcms/storage-s3'
import EventDrafts from '@/collections/Drafts/EventDrafts'
import PoemDrafts from '@/collections/Drafts/PoemDrafts'
import Devices from '@/collections/Extra/Device'
import Suggestions from '@/collections/Suggestions'
import Groups from '@/collections/Posts/Groups'

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
    SubPoems,
    EventDrafts,
    PoemDrafts,
    Devices,
    Suggestions,
    Groups
  ],
  sharp,
  plugins: [
    payloadCloudPlugin(),
    storage,
    searchPlugin({
      collections: ['poems', 'subjects', 'categories','groups'],
      defaultPriorities: {
        poems: 10,
        categories: 20,
        subjects: 30,
      },
    }),
  ],
})
