import React from 'react'
import { getIn, FormikConsumer, FormikProps } from 'formik'

import { FormField } from './types'
import { Input } from '@/common/ui/input'
import { Textarea } from '@/common/ui/textarea'
import { Checkbox } from '@/common/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/common/ui/radio-group'
import { Label } from '@/common/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/common/ui/select'
import { DateTimePicker } from '@fk6/react-datepicker'

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
        />
      )
    }

    case 'checkbox': {
      const { checkboxLabel } = field
      return (
        <Checkbox
          size={'lg'}
          checked={value}
          onCheckedChange={(e) => setFieldValue(name, e)}
          onBlur={onBlur}
        >
          {checkboxLabel}
        </Checkbox>
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
      return (
        <DateTimePicker
          value={value}
          calendar="hijri"
          calendarProps={{
            position: 'top',
            disableLocaleDigits: true,
            hideFooter: true,
          }}
          onChange={(date) => setFieldValue(name, date)}
          className={'w-full'}
        />
      )
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
