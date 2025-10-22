'use client'

import React from 'react'
import { Formik } from 'formik'
import FormikFormControl from './FormikFormControl'
import Field from './Field'
import { FormDataSchema, FormUISchema, FormField } from './types'
import { Button } from '@/common/ui/button'

interface FormProps {
  initialValues: { [key: string]: any }
  dataSchema: FormDataSchema
  uiSchema: FormUISchema
  onSubmit: (values: any) => void
  /**
   * Section ClassName
   */
  className?: string
}

const Form = ({ initialValues, dataSchema, uiSchema, onSubmit, className }: FormProps) => {
  const { fields: fieldsData } = dataSchema
  const { sections } = uiSchema
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(values) => validateDataSchema({ values, dataSchema })}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ handleSubmit, values, touched }) => {
        return (
          <form onSubmit={handleSubmit}>
            {sections.map((section) => {
              const { title, fields } = section
              return (
                <div key={title} className={className}>
                  {fields.map((fieldName) => {
                    const field = fieldsData[fieldName]

                    if (!field) {
                      throw new Error('Wrong field name in ui schema')
                    }

                    if (!areFieldConditionsFulfilled({ values, field })) {
                      return null
                    }

                    return (
                      <FormikFormControl
                        key={fieldName}
                        name={fieldName}
                        label={field.label}
                        caption={field.caption}
                      >
                        <Field field={field} name={fieldName} />
                      </FormikFormControl>
                    )
                  })}
                </div>
              )
            })}
            <Button type="submit" className={'block w-full my-3'}>
              Submit
            </Button>
          </form>
        )
      }}
    </Formik>
  )
}

function validateDataSchema({ values, dataSchema }: { values: any; dataSchema: FormDataSchema }) {
  const { fields } = dataSchema
  const errors: any = {}

  Object.keys(fields).forEach((fieldName) => {
    const field = fields[fieldName]

    if (!field.required) {
      return
    }

    if (areFieldConditionsFulfilled({ values, field })) {
      const value = getFieldValue({ name: fieldName, field, values })
      // this check should depend on the field type
      if (value === undefined || values === '' || value === null) {
        errors[fieldName] = `Field "${fieldName}" is required`
      }
    }
  })

  console.log('errors', errors)
  return errors
}

const areFieldConditionsFulfilled = ({
  values,
  field,
}: {
  values: any
  field: FormField
}): boolean => {
  const { condition } = field
  if (!condition || condition.rules.length === 0) {
    return true
  }

  const { rules, operator } = condition

  let areRulesRespected = true
  let i = 0
  while (areRulesRespected && i < rules.length) {
    const { field: fieldName, value } = rules[i]

    const fieldValue = getFieldValue({ name: fieldName, field, values })
    const isRuleRespected = fieldValue === value

    areRulesRespected =
      operator === 'AND'
        ? areRulesRespected && isRuleRespected
        : areRulesRespected || isRuleRespected
    i++
  }
  return areRulesRespected
}

const getFieldValue = ({
  name,
  field,
  values,
}: {
  name: string
  field: FormField
  values: any
}): any => {
  if (values[name] === undefined) {
    return undefined
  }
  switch (field.type) {
    case 'text':
    case 'textarea':
    case 'checkbox':
    case 'radio':
    case 'date':
      return values[name]
    case 'select':
      return values[name].values
  }
}

export default Form
