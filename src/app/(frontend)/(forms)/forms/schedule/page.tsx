'use client'

import React from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import { Form } from '@/common/form/Form'

const Scheduler = ({}) => {
  return (
    <>
      <Form
        initialValues={{
          name: '',
          email: '',
          dateOfBirth: '',
          favoriteColor: [],
          aboutYourself: '',
          radioGroup: '',
          profileStatus: '',
        }}
        dataSchema={dataSchema}
        uiSchema={uiSchema}
        className={'grid grid-cols-1 gap-4'}
        onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
      />
    </>
  )
}

const dataSchema: FormDataSchema = {
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

const uiSchema: FormUISchema = {
  sections: [
    {
      title: 'Elaan Form',
      fields: ['title', 'datetime', 'venueType', 'venue', 'editor'],
    },
  ],
}

export default Scheduler
