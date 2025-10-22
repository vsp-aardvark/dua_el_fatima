'use client'

import React, { FC, useRef, useState } from 'react'
import { FormikHelpers } from 'formik/dist/types'
import { DateTimePicker } from '@fk6/react-datepicker'

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
        onChange={(date: any) => setFieldValue(name, date)}
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

HijrPicker.displayName = 'HijrPicker'
HijrPicker.propTypes = {
  value: String,
  name: String,
  setFieldValue: Function,
}

export default HijrPicker
