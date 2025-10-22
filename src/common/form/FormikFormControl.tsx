import React, { PropsWithChildren } from 'react'
import { getIn, FormikConsumer } from 'formik'
import { FormDescription, FormLabel } from '@/common/ui/form'
import { cn } from '@/common/lib/utils'

interface Props {
  name: string
  label?: string
  caption?: string,
  className?: string
}

export const FormikFormControl: React.FC<Props & PropsWithChildren> = ({
  name,
  label,
  caption,
  children,
  className,
}) => {
  return (
    <FormikConsumer>
      {({ errors, touched }) => {
        const error: string | undefined = getIn(errors, name)
        return (
          <div
            data-slot="form-control"
            className={cn('flex flex-col gap-2.5', className)}
            data-invalid={!!error}
          >
            <FormLabel className={"block text-sm/6 font-medium text-gray-900"} >{label}</FormLabel>
            {children}
            <FormDescription error={touched ? error : undefined}>{caption}</FormDescription>
          </div>
        )
      }}
    </FormikConsumer>
  )
}

export default FormikFormControl
