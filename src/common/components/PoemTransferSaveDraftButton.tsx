import React from 'react'
import type { BeforeDocumentControlsServerProps } from 'payload'
import Link from 'next/link'

export default function PoemTransferSaveDraftButton({}: BeforeDocumentControlsServerProps) {
  //btn--disabled
  return (
    <Link
      className="btn btn--icon-style-without-border btn--size-medium btn--withoutPopup  btn--style-primary btn--withoutPopup"
      color="gray"
      href="#"
    >
      Transfer
    </Link>
  )
}
