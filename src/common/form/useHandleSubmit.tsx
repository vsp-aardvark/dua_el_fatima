'use client'
import React, { useCallback } from 'react'
import { FormikConfig } from 'formik'
import { toast } from 'sonner'
import { Alert, AlertIcon, AlertTitle } from '@/common/ui/alert'
import { RiErrorWarningFill } from '@remixicon/react'

const useHandleSubmit = (formAction: any, withExtra: Record<string, any> = {}) => {
  const handleSubmit: FormikConfig<any>['onSubmit'] = useCallback(
    async (values, { setSubmitting, resetForm }) => {
      try {
        const result = await formAction({ ...values, ...withExtra })
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
    },
    [formAction, withExtra],
  )
  return [handleSubmit]
}

export default useHandleSubmit
