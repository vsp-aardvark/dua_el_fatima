import React from 'react'
import { SaveButton } from '@payloadcms/ui'
import type { SaveButtonServerProps } from 'payload'

export default function SubmitSaveButton({}: SaveButtonServerProps) {
  return <SaveButton label="Submit" />
}
