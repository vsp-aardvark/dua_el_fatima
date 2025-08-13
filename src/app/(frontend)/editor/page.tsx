'use client'

import React, { useMemo } from 'react'
import { RenderFields } from '@payloadcms/ui'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import { MediaBlock } from '@/common/blocks/MediaBlock'
import { RichTextFieldClient } from 'payload'

const Page = ({}) => {
  //@ts-ignore
  const fields: RichTextFieldClient = useMemo(() => {
    return {
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
    }
  }, [])

  return (
    <div className={'page bg-black w-screen p-2 h-screen'}>
      <RenderFields
        fields={[fields]}
        readOnly={false}
        parentIndexPath={''}
        parentPath={''}
        parentSchemaPath={''}
        permissions={true}
      />
    </div>
  )
}

export default Page
