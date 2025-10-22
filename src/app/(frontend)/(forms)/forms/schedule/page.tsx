'use client'

import React, { useMemo } from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'

const Scheduler = ({}) => {
  const dataSchema: FormDataSchema = useMemo(() => {
    return {
      fields: {
        title: {
          type: 'select',
          label: 'Elaan',
          caption: '',
          required: true,
          options: [
            { label: 'Majls', id: 'Majls' },
            { label: 'Jashan', id: 'Jashan' },
            { label: 'Amaal', id: 'Amaal' },
          ],
        },
        datetime: {
          type: 'date',
          label: 'Ba Tareeq & Ba Waqt',
          required: true,
        },
        venueType: {
          label: 'Select',
          type: 'radio',
          options: [
            { label: 'Mutamanni', value: 'male' },
            { label: 'Bani-e-Majlis', value: 'female' },
            { label: 'Bani-e-Jashan', value: 'other' },
          ],
        },
        venue: {
          type: 'textarea',
          label: 'Ba MuQaaam',
          required: true,
        },
        editor: {
          type: 'editor',
          label: 'Editor',
        },
      },
    }
  }, [])

  const uiSchema: FormUISchema = useMemo(() => {
    return {
      sections: [
        {
          title: 'Elaan Form',
          fields: ['title', 'datetime', 'venueType', 'venue', 'editor'],
        },
      ],
    }
  }, [])

  return (
    <>
      <Form
        initialValues={{
          title: '',
          datetime: '',
          venueType: '',
          venue: [],
          editor: '',
        }}
        dataSchema={dataSchema}
        uiSchema={uiSchema}
        className={'grid grid-cols-1 gap-4'}
        onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
      />
    </>
  )
}

export default Scheduler
