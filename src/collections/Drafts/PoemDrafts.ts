import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
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
import { MediaBlock } from '@/common/blocks/MediaBlock'
import { adminOnly } from '@/access/adminOnly'

const PoemDrafts: CollectionConfig = {
  slug: 'poems-drafts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'Drafts',
  },
  defaultPopulate: {
    title: true,
  },
  orderable: true,
  access: {
    read: anyone,
    create: anyone,
    update: adminOnly,
    delete: adminOnly,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'subject',
          type: 'relationship',
          relationTo: 'subjects',
          required: true,
          admin: {
            description: 'Description for the Poem, e.g Hussein, Fatima',
            allowCreate: true,
          },
        },
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          required: true,
        },
      ],
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
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
              required: true,
              admin: {
                condition: (data) => !data?.group || data.group.length === 0,
                description: 'Required unless this poem is a group (see below).',
              },
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: false,
            },
          ],
        },
      ],
    },
    {
      type: 'checkbox',
      label: 'Is Group or Anjuman ?',
      name: 'isGroup',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default PoemDrafts
