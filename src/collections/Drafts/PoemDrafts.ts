import { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { HorizontalRuleFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { adminOnly } from '@/access/adminOnly'

const PoemDrafts: CollectionConfig = {
  slug: 'poems-drafts',
  labels: {
    singular: 'Lyrics Request',
    plural: 'Lyrics Requests',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    group: 'Drafts',
    components: {
      edit: {
        SaveButton: '@/common/components/SubmitSaveButton',
        beforeDocumentControls: [
          '@/common/components/RejectButton',
          '@/common/components/TransferButton',
        ],
      },
    },
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
          label: 'Shaheed / Munasibath',
          relationTo: 'subjects',
          required: true,
          admin: {
            description: 'e.g Hussein, Fatima',
            allowCreate: true,
          },
        },
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'categories',
          required: true,
          admin: {
            description: 'e.g Nouha, Marsia',
            allowCreate: true,
          },
        },
      ],
    },
    {
      name: 'group',
      type: 'relationship',
      relationTo: 'groups',
      required: false,
      label: 'Anjuman',
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
                features: () => [
                  // ...rootFeatures,
                  // BlocksFeature({ blocks: [MediaBlock] }),
                  // FixedToolbarFeature(),
                  // InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
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
  ],
}

export default PoemDrafts
