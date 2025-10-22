"use client"

import React, { FC, useRef, useState } from 'react'
import { DateTimePicker } from '@fk6/react-datepicker'
import { FormikHelpers } from 'formik/dist/types'

type Props = {
  value: Date | string
  name: string
} & Pick<FormikHelpers<any>, 'setFieldValue'>

const HijrPicker: FC<Props> = ({ value, setFieldValue, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)

  // const handleDivClick = useCallback(() => {}, [])
  return (
    <>
      <DateTimePicker
        value={value}
        calendar="hijri"
        calendarProps={{
          position: 'top',
          disableLocaleDigits: true,
          timePickerProps: {
            is12h: true,
          },
        }}
        onChange={(date) => setFieldValue(name, date)}
        className={'w-full'}
        placeholder={'Select here'}
        ref={inputRef}
        onOpenChange={setOpen}
        open={open}
        onClick={() => setOpen(!open)}
      />
    </>
  )
}

export default HijrPicker
