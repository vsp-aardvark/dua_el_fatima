'use client'

import React, { Fragment } from 'react'
import type { BeforeDocumentControlsServerProps } from 'payload'
import { usePathname } from 'next/navigation'

export default function RejectButton({}: BeforeDocumentControlsServerProps) {
  const pathname = usePathname()
  if (pathname.includes('/create')) {
    return <Fragment />
  }
  return (
    <button
      className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup  btn--style-secondary btn--withoutPopup"
      color="red"
    >
      Reject
    </button>
  )
}
