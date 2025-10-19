'use client'

import * as React from 'react'
import { cn } from '@/common/lib/utils'
import { Label } from '@/common/ui/label'
import { Slot } from '@radix-ui/react-slot'
import { Label as LabelPrimitive } from 'radix-ui'

//
// type FormFieldContextValue<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// > = {
//   name: TName;
// };

// const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

// const FormField = <
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
// >({
//   ...props
// }: ControllerProps<TFieldValues, TName>) => {
//   return (
//     <FormFieldContext.Provider value={{ name: props.name }}>
//       <Controller {...props} />
//     </FormFieldContext.Provider>
//   );
// };

// const useFormField = () => {
//   const fieldContext = React.useContext(FormFieldContext);
//   const itemContext = React.useContext(FormItemContext);
//   const { getFieldState, formState } = useFormContext();
//
//   const fieldState = getFieldState(fieldContext.name, formState);
//
//   if (!fieldContext) {
//     throw new Error('useFormField should be used within <FormField>');
//   }
//
//   const { id } = itemContext;
//
//   return {
//     id,
//     name: fieldContext.name,
//     formItemId: `${id}-form-item`,
//     formDescriptionId: `${id}-form-item-description`,
//     formMessageId: `${id}-form-item-message`,
//     ...fieldState,
//   };
// };

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

function FormItem({
  className,
  error,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { error?: string }) {
  const id = React.useId()
  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('flex flex-col gap-2.5', className)}
        data-invalid={!!error}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, id, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Label
      data-slot="form-label"
      className={cn('font-medium text-foreground', className)}
      htmlFor={id}
      {...props}
    />
  )
}

function FormControl({ error, ...props }: React.ComponentProps<typeof Slot> & { error?: string }) {
  return <Slot data-slot="form-control" aria-invalid={!!error} {...props} />
}

function FormDescription({
  className,
  error,
  id,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { error?: string }) {
  if (error) {
    return null // Hide the description when there's an error
  }
  return (
    <div
      data-slot="form-description"
      id={id}
      className={cn('text-xs text-muted-foreground -mt-0.5', className)}
      {...props}
    />
  )
}

function FormMessage({
  className,
  children,
  id,
  error,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { error?: string }) {
  const body = error ? String(error) : children

  if (!body) {
    return null
  }

  return (
    <div
      data-slot="form-message"
      id={id}
      className={cn('-mt-0.5 text-xs font-normal text-destructive', className)}
      {...props}
    >
      {body}
    </div>
  )
}

export { FormControl, FormDescription, FormItem, FormLabel, FormMessage }
