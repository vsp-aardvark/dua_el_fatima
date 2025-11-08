import React from 'react'
import { getIn, FormikConsumer, FormikProps } from 'formik'

import { FormField } from './types'
import { Input } from '@/common/ui/input'
import { Textarea } from '@/common/ui/textarea'
import { Checkbox } from '@/common/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/common/ui/radio-group'
import { Label } from '@/common/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/common/ui/select'
import Editor from '@/common/ui/editor'
import AsyncSelect from '@/common/ui/async-select'
import dynamic from 'next/dynamic'

const HijrPicker = dynamic(() => import('@/common/ui/hijr-picker'), {
  ssr: false,
})

interface Props {
  name: string
  field: FormField
}

export default function Field({ field, name }: Props) {
  return (
    <FormikConsumer>
      {(formikProps) => {
        const { errors, touched, values } = formikProps
        const error: string | undefined = getIn(errors, name)
        const isTouched: boolean = !!getIn(touched, name)
        const value = getIn(values, name)
        return (
          <FieldSwitch
            name={name}
            field={field}
            hasError={isTouched && !!error}
            // @ts-ignore
            isValid={!error && isTouched}
            value={value}
            {...formikProps}
          />
        )
      }}
    </FormikConsumer>
  )
}

type FieldSwitchProps = {
  name: string
  field: FormField
  hasError: boolean
  isValid: boolean
  value: any
  handleBlur: any
  handleChange: any
} & FormikProps<any>

function FieldSwitch({ name, field, setFieldValue, setFieldTouched, value }: FieldSwitchProps) {
  const onBlur = () => setFieldTouched(name)

  switch (field.type) {
    case 'email':
    case 'number':
    case 'text': {
      return (
        <Input
          name={name}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          variant="lg"
          type={field.type}
          placeholder={field.placeholder}
        />
      )
    }

    case 'textarea': {
      return (
        <Textarea
          name={name}
          value={value}
          onChange={(e) => setFieldValue(name, e.target.value)}
          onBlur={onBlur}
          variant="lg"
          placeholder={field.placeholder}
        />
      )
    }

    case 'checkbox': {
      const { checkboxLabel } = field
      return (
        <div className={'flex items-center space-x-2'}>
          <Checkbox
            size={'lg'}
            checked={value}
            onCheckedChange={(e) => setFieldValue(name, e)}
            onBlur={onBlur}
            id={`checkbox_for_${name}`}
          />
          <Label
            className={'block text-sm/6 font-medium text-gray-900'}
            htmlFor={`checkbox_for_${name}`}
          >
            {checkboxLabel}
          </Label>
        </div>
      )
    }

    case 'radio': {
      const { options } = field
      return (
        <RadioGroup
          value={value}
          onValueChange={(e) => setFieldValue(name, e)}
          onBlur={onBlur}
          defaultValue={value}
          size={'lg'}
        >
          {options.map((option, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <RadioGroupItem value={option.value} id={`${name}-${index}`} />
              <Label htmlFor={`${name}-${index}`} variant="secondary">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      )
    }

    case 'date': {
      // return <Datepicker value={value} onChange={({ date }) => setFieldValue(name, date)} />
      return <HijrPicker value={value} setFieldValue={setFieldValue} name={name} />
    }

    case 'editor': {
      // return <Datepicker value={value} onChange={({ date }) => setFieldValue(name, date)} />
      return <Editor value={value} name={name} setFieldValue={setFieldValue} />
    }

    case 'async-select': {
      const { config } = field
      // return <Datepicker value={value} onChange={({ date }) => setFieldValue(name, date)} />
      return <AsyncSelect value={value} name={name} setFieldValue={setFieldValue} {...config} />
    }

    case 'select': {
      const { options } = field
      return (
        <>
          <Select
            value={value}
            onValueChange={(params) => setFieldValue(name, params)}
            onOpenChange={onBlur}
          >
            <SelectTrigger size={'lg'}>
              <SelectValue placeholder={field.label} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option.id}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      )
    }

    default:
      return null
  }
}
