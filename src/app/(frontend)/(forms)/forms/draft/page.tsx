'use client'

import React, { useMemo } from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'
import useHandleSubmit from '@/common/form/useHandleSubmit'
import createDraft from '@/app/actions/create-draft'

const Draft = ({}) => {
  const dataSchema: FormDataSchema = useMemo(() => {
    return {
      fields: {
        title: {
          type: 'text',
          label: 'Title',
          caption: '',
          required: true,
        },
        subject: {
          type: 'async-select',
          label: 'Shaheed / Munasibath',
          required: false,
          config: {
            collection: 'subjects',
          },
        },
        category: {
          type: 'async-select',
          label: 'Category',
          required: false,
          config: {
            collection: 'categories',
          },
          caption: 'e.g Nouha, Marsia',
        },
        group: {
          type: 'async-select',
          label: 'Anjuman (Optional)',
          required: false,
          config: {
            collection: 'groups',
          },
          caption: 'e.g e Masomeen',
        },
        editor: {
          type: 'editor',
          label: 'Editor',
          required: false,
        },
        files: {
          type: 'picturelist',
          label: 'Upload Attachments',
          required: false,
        },
      },
    }
  }, [])
  const uiSchema: FormUISchema = useMemo(() => {
    return {
      sections: [
        {
          title: 'Elaan Form',
          fields: ['title', 'subject', 'category', 'group', 'editor', 'files'],
        },
      ],
    }
  }, [])

  const [handleSubmit] = useHandleSubmit(createDraft, {}, { withFiles: true })

  return (
    <>
      <Form
        initialValues={{
          title: '',
          subject: '',
          category: '',
          group: '',
          editor: '',
        }}
        dataSchema={dataSchema}
        uiSchema={uiSchema}
        className={'grid grid-cols-1 gap-4'}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Draft
