'use client'

import * as React from 'react'
import { cn } from '@/common/lib/utils'
import { Button, ButtonArrow } from '@/common/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/common/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/common/ui/popover'
import { RiCheckboxCircleFill } from '@remixicon/react'
import { FormikHelpers } from 'formik/dist/types'
import { FC, useCallback, useEffect, useState } from 'react'
import { Config } from '@/payload-types'

export type AsyncSelectProps = {
  value: Date | string
  name: string
  placeholder?: string
  collection: keyof Config['collections']
  ///which field to display as label
  labelKey?: string
  // which field to use as value
  valueKey?: string
  searchKey?: string
} & Pick<FormikHelpers<any>, 'setFieldValue'>

const AsyncSelect: FC<AsyncSelectProps> = ({
  value,
  setFieldValue,
  collection,
  labelKey = 'title',
  valueKey = 'id',
  placeholder = 'Select any item...',
  searchKey = 'title',
  name,
}) => {
  const [open, setOpen] = React.useState(false)
  const [items, setItems] = React.useState<any[]>([])
  const [selected, setSelected] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(false)
  const [query, setQuery] = useState('')

  // --- Debounced search ---
  useEffect(() => {
    const delay = setTimeout(async () => {
      setLoading(true)
      try {
        const url =
          query.trim() === ''
            ? `/api/${collection}?limit=20&depth=0&draft=false&locale=undefined&trash=false`
            : `/api/${collection}?where[${searchKey}][contains]=${encodeURIComponent(query.toLowerCase())}&depth=0&draft=false&locale=undefined&trash=false`

        const res = await fetch(url)
        const data = await res.json()

        setItems(data.docs ?? [])
      } catch (err) {
        console.error('Error loading collection:', err)
      } finally {
        setLoading(false)
      }
    }, 100)

    return () => clearTimeout(delay)
  }, [collection, query, searchKey, setItems, setLoading])

  const handleSelect = useCallback(
    (currentValue: string, item: any) => {
      setSelected(item)
      setFieldValue(name, currentValue)
      setOpen(false)
    },
    [name, setFieldValue],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          mode="input"
          placeholder={!value}
          aria-expanded={open}
          className="w-full"
        >
          <span className={cn('truncate')}>{selected ? selected[labelKey] : placeholder}</span>
          <ButtonArrow />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-(--radix-popper-anchor-width) p-0">
        <Command shouldFilter={false}>
          <CommandInput placeholder={placeholder} value={query} onValueChange={setQuery} />
          <CommandList>
            <CommandEmpty>
              {loading ? 'Loading...' : `No results found. ${items.length}`}
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item[valueKey]}
                  value={item[valueKey]}
                  onSelect={(currentValue) => handleSelect(currentValue, item)}
                >
                  <span className="truncate">{item[labelKey]}</span>
                  {selected?.[valueKey] === item[valueKey] && (
                    <RiCheckboxCircleFill className={cn('size-4 ms-auto text-primary')} />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default AsyncSelect
