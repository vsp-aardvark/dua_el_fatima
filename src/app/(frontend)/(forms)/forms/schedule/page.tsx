'use client'

import React, { useMemo } from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'
import createElaan from '@/app/actions/create-elaan'
import { useSearchParams } from 'next/navigation'
import useHandleSubmit from '@/common/form/useHandleSubmit'

const Scheduler = ({}) => {
  const params = useSearchParams()

  const dataSchema: FormDataSchema = useMemo(() => {
    return {
      fields: {
        title: {
          type: 'select',
          label: 'Elaan',
          caption: '',
          required: true,
          options: [
            { label: 'Majlis', id: 'Majlis' },
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
            { label: 'Bani-e-Majlis | Mutamanni', value: 'Bani-e-Majlis' },
            { label: 'Bani-e-Jashan | Mutamanni', value: 'Bani-e-Jashan' },
          ],
        },
        venue: {
          type: 'textarea',
          label: 'Ba MuQaaam',
          required: true,
        },
        org: {
          type: 'text',
          label: '',
          required: false,
          placeholder: 'Organiser',
          condition: {
            operator: 'OR',
            rules: [
              { field: 'venueType', value: 'Bani-e-Majlis' },
              { field: 'venueType', value: 'Bani-e-Jashan' },
            ],
          },
        },
      },
    }
  }, [])
  const uiSchema: FormUISchema = useMemo(() => {
    return {
      sections: [
        {
          title: 'Elaan Form',
          fields: ['title', 'datetime', 'venueType', 'org', 'venue'],
        },
      ],
    }
  }, [])

  const [handleSubmit] = useHandleSubmit(createElaan, { adj: params.get('adj') ?? '0' })

  return (
    <>
      <Form
        initialValues={{
          title: '',
          datetime: '',
          venueType: '',
          venue: '',
          org: '',
        }}
        dataSchema={dataSchema}
        uiSchema={uiSchema}
        className={'grid grid-cols-1 gap-4'}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default Scheduler
