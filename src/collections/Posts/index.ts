import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
  LinkFeature,
} from '@payloadcms/richtext-lexical'
import { slugField } from '@/common/fields/slug'
import { MediaBlock } from '@/common/blocks/MediaBlock'

const Poems: CollectionConfig<'poems'> = {
  slug: 'poems',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
      name: 'subject',
      type: 'relationship',
      relationTo: 'subjects',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            ParagraphFeature(),
            LinkFeature(),
            BlocksFeature({ blocks: [MediaBlock] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: false,
      required: false,
      admin: {
        condition: (data) => !data?.group || data.group.length === 0,
        description: 'Required unless this poem is a group (see below).',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'group',
      type: 'array',
      fields: [
        {
          name: 'poem',
          type: 'relationship',
          relationTo: 'poems',
        },
      ],
      required: false,
      admin: {
        description:
          'If you add poems here, this entry becomes a group and the content field is optional.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],
  versions: {
    drafts: {
      autosave: {
        // We set this interval for optimal live preview
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}

export default Poems
