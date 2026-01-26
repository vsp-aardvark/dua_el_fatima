'use client'

import React, { useCallback } from 'react'
import { FormikConfig } from 'formik'
import { toast } from 'sonner'
import { Alert, AlertIcon, AlertTitle } from '@/common/ui/alert'
import { RiErrorWarningFill } from '@remixicon/react'

type HandleSubmitOptions = {
  withFiles?: boolean
}

const cleanString = (originalString: string, replace = '') => {
  return originalString.replace(/[^a-zA-Z0-9]/g, replace)
}

const handleFileUpload = async (file: File, alt = '') => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('_payload', JSON.stringify({ alt }))

  const response = await fetch('/api/media', {
    method: 'POST',
    cache: 'no-cache',
    body: formData,
  })

  const json = await response.json()
  console.debug(`uploaded file ${file.name} -> ${json.message}`)

  return json['doc']['id']
}

const useHandleSubmit = (
  formAction: any,
  extra: Record<string, any> = {},
  options: HandleSubmitOptions = {},
) => {
  const handleSubmit: FormikConfig<any>['onSubmit'] = useCallback(
    async (values, { setSubmitting, resetForm }) => {
      try {
        const inputValues = { ...values, ...extra }
        let payload
        if (options.withFiles) {
          //form has files then a formData
          const formData = new FormData()
          for (const key in inputValues) {
            const inputValue = inputValues[key]
            if (typeof inputValue == 'object') {
              if (Array.isArray(inputValue)) {
                const arrayKey = `${key}[]`
                for (const inputValueElement of inputValue) {
                  if (Object.hasOwn(inputValueElement, 'file') && !!inputValueElement.file) {
                    try {
                      const mediaId = await handleFileUpload(
                        inputValueElement.file,
                        cleanString(inputValueElement.file.name, '_'),
                      )
                      formData.append(arrayKey, mediaId)
                    } catch (e) {
                      console.debug(e)
                    }
                  } else {
                    formData.append(arrayKey, JSON.stringify(inputValueElement))
                  }
                }
              } else {
                if (Object.hasOwn(inputValue, 'file') && !!inputValue.file) {
                  try {
                    const mediaId = await handleFileUpload(
                      inputValue.file,
                      cleanString(inputValue.file.name, '_'),
                    )
                    formData.append(key, mediaId)
                  } catch (e) {
                    console.debug(e)
                  }
                } else {
                  formData.append(key, JSON.stringify(inputValue))
                }
              }
            } else {
              formData.append(key, inputValue)
            }
          }
          payload = formData
        } else {
          payload = { ...inputValues }
        }
        const result = await formAction(payload)

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
        console.debug(result)
      } catch (error) {
        console.debug('Submission error:', error)
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
    [formAction, extra],
  )
  return [handleSubmit]
}

export default useHandleSubmit
