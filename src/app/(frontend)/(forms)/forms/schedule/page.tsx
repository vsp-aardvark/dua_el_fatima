'use client'

import React, { useMemo } from 'react'
import { toast } from 'sonner'
import { FormikConfig } from 'formik'
import { FormDataSchema, FormUISchema } from '@/common/form/types'
import Form from '@/common/form/Form'
import createElaan from '@/app/actions/create-elaan'
import { Alert, AlertIcon, AlertTitle } from '@/common/ui/alert'
import { RiErrorWarningFill } from '@remixicon/react'
import { useSearchParams } from 'next/navigation'

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
            { label: 'Mutamanni', value: 'Mutamanni' },
            { label: 'Bani-e-Majlis', value: 'Bani-e-Majlis' },
            { label: 'Bani-e-Jashan', value: 'Bani-e-Jashan' },
          ],
        },
        venue: {
          type: 'textarea',
          label: 'Ba MuQaaam',
          required: true,
        },
      },
    }
  }, [])

  const uiSchema: FormUISchema = useMemo(() => {
    return {
      sections: [
        {
          title: 'Elaan Form',
          fields: ['title', 'datetime', 'venueType', 'venue'],
        },
      ],
    }
  }, [])

  const handleSubmit: FormikConfig<any>['onSubmit'] = async (
    values,
    { setSubmitting, resetForm },
  ) => {
    try {
      const result = await createElaan({ ...values, adj: params.get('adj') ?? '0' })
      if (result.errors || result.message) {
        toast.custom(
          (t) => (
            <Alert variant="mono" icon="destructive" onClose={() => toast.dismiss(t)}>
              <AlertIcon>
                <RiErrorWarningFill />
              </AlertIcon>
              <AlertTitle>{result.message}</AlertTitle>
            </Alert>
          ),
          {
            duration: 5000,
          },
        )
        return
      }
      resetForm()
      console.log(result)
    } catch (error) {
      console.error('Submission error:', error)
      toast.custom(
        (t) => (
          <Alert variant="mono" icon="destructive" onClose={() => toast.dismiss(t)}>
            <AlertIcon>
              <RiErrorWarningFill />
            </AlertIcon>
            <AlertTitle>Submission failed. Please try again.</AlertTitle>
          </Alert>
        ),
        {
          duration: 5000,
        },
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Form
        initialValues={{
          title: '',
          datetime: '',
          venueType: '',
          venue: '',
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
