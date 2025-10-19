'use client'

import React, { Fragment } from 'react'
import type { BeforeDocumentControlsClientProps } from 'payload'
import { usePathname } from 'next/navigation'
import { transferDraftPost } from '@/actions/transferCollectionAction'

export default function TransferButton({}: BeforeDocumentControlsClientProps) {
  const pathname = usePathname()
  if (pathname.includes('/create')) {
    return <Fragment />
  }
  return (
    <button
      className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup  btn--style-primary btn--withoutPopup"
      color="gray"
      title={'Event transferring to Event Schedule'}
      onClick={async () => await transferDraftPost(pathname, {})}
    >
      Transfer
    </button>
  )
}
