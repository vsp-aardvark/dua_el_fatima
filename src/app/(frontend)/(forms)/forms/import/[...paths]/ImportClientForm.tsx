'use client'

import React, { FC, useMemo } from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'
import useHandleSubmit from '@/common/form/useHandleSubmit'
import importLyrics from '@/app/actions/import-lyrics'

const ImportClientForm: FC<{ folders: string[]; path: string[] }> = ({ folders, path }) => {
  const dataSchema: FormDataSchema = useMemo(() => {
    /**
     * Generate looped fields
     */
    const extraFields = folders.reduce(
      (previousValue, currentValue, currentIndex) => {
        const copyPreviousValue = { ...previousValue }

        copyPreviousValue[`subject${currentIndex}`] = {
          type: 'async-select',
          label: `Select Shaheed for '${currentValue}'`,
          required: false,
          config: {
            collection: 'subjects',
          },
        }

        copyPreviousValue[`group${currentIndex}`] = {
          type: 'text',
          label: 'Grouped',
          required: false,
        }

        return copyPreviousValue
      },
      {} as FormDataSchema['fields'],
    )
    const baseSchema: FormDataSchema = {
      fields: {
        subject: {
          type: 'async-select',
          label: 'Shaheed / Munasibath',
          required: false,
          config: {
            collection: 'subjects',
          },
        },
        type: {
          type: 'select',
          label: 'File structure type',
          required: false,
          options: [
            { label: 'Folders', id: 'folders' },
            { label: 'Files', id: 'files' },
          ],
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
        separator: {
          type: 'separator',
        },
        ...extraFields,
      },
    }
    return baseSchema
  }, [folders])

  const uiSchema: FormUISchema = useMemo(() => {
    const uiFields = folders.map((_, index) => {
      return ['separator', `subject${index}`, `group${index}`]
    })
    return {
      sections: [
        {
          title: 'Import Client Form',
          fields: ['category', 'group', 'type'].concat(uiFields.flat()),
        },
      ],
    }
  }, [folders])

  const [handleSubmit] = useHandleSubmit(importLyrics, { folders: folders, path })

  // Category
  // Title -> Subject [Loops]
  // Group ->

  return (
    <>
      <Form
        initialValues={{
          category: '',
          group: '',
        }}
        dataSchema={dataSchema}
        uiSchema={uiSchema}
        className={'grid grid-cols-1 gap-4'}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default ImportClientForm
