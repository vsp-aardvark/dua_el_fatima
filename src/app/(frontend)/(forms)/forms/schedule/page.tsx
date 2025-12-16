'use client'

import React, { useEffect, useMemo } from 'react'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'
import createElaan from '@/app/actions/create-elaan'
import { useSearchParams } from 'next/navigation'
import useHandleSubmit from '@/common/form/useHandleSubmit'
import { useFormikContext } from 'formik'

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
          disabled: true,
          options: [
            { label: 'Bani-e-Majlis | Mutamanni', value: 'Bani-e-Majlis' },
            { label: 'Bani-e-Jashan | Mutamanni', value: 'Bani-e-Jashan' },
          ],
          condition: {
            operator: 'OR',
            rules: [{ field: 'title', value: 'Amaal' }],
          },
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
      >
        <OnChangeEffect />
      </Form>
    </>
  )
}

/**
 * 1. Create the observer component
 * @constructor
 */
const OnChangeEffect = () => {
  // 2. Access Formik context
  const { values, setFieldValue } = useFormikContext<Record<string, any>>()
  // 3. Use effect hook to watch specific values
  useEffect(() => {
    // 4. Perform the side effect when conditions are met
    if (values.title && values.title != 'Amaal') {
      switch (values.title) {
        case 'Jashan':
          setFieldValue('venueType', 'Bani-e-Jashan')
          break
        case 'Majlis':
          setFieldValue('venueType', 'Bani-e-Majlis')
          break
      }
    } else {
      setFieldValue('venueType', null)
    }
  }, [setFieldValue, values.title]) // Dependencies array

  return null // This component doesn't render anything
}

export default Scheduler
