'use client'

import dynamic from 'next/dynamic'
import React, { FC, useRef, useState } from 'react'
import { FormikHelpers } from 'formik/dist/types'

const DatePicker = dynamic(() => import('@fk6/react-datepicker'), {
  ssr: false,
})

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
      {/*// @ts-ignore*/}
      <DatePicker.DateTimePicker
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

export default HijrPicker
