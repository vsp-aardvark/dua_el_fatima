'use client'

import React from 'react'
import { CardContent } from '@/common/ui/card'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

const Page = ({}) => (
  <CardContent className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95">
    <div>
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
        <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <h3 className="text-base font-semibold text-gray-900">Submitted successful</h3>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Data submitted successfully waiting for approval & further instruction
          </p>
        </div>
      </div>
    </div>
    <div className="mt-5 sm:mt-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        onClick={() => {
          // If the event has already fired, call it directly
          // @ts-ignore
          if (window?.flutter_inappwebview) {
            // @ts-ignore
            window?.flutter_inappwebview
              ?.callHandler('onCloseHandler', Date.now(), { key: 'value' })
              .then(function (result: any) {
                console.log(result)
              })
          }
        }}
      >
        Close
      </button>
    </div>
    <div className="mt-5 sm:mt-6">
      <Link
        type="button"
        href={'tel:+256758417777'}
        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        Contact Moderator
      </Link>
    </div>
  </CardContent>
)

export default Page
