import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Link from 'next/link'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <>
      <header>
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
            <div className="relative z-10 flex items-center gap-16">
              <Link aria-label="Home" href="/">
                <svg viewBox="0 0 106 40" aria-hidden="true" className="h-10 w-auto">
                  <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="fill-cyan-500"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
                    />
                  </svg>
                  <path
                    className="fill-gray-900"
                    d="M53.1477 26V14.3636H57.5114C58.4053 14.3636 59.1553 14.5303 59.7614 14.8636C60.3712 15.197 60.8314 15.6553 61.142 16.2386C61.4564 16.8182 61.6136 17.4773 61.6136 18.2159C61.6136 18.9621 61.4564 19.625 61.142 20.2045C60.8277 20.7841 60.3636 21.2405 59.75 21.5739C59.1364 21.9034 58.3807 22.0682 57.483 22.0682H54.5909V20.3352H57.1989C57.7216 20.3352 58.1496 20.2443 58.483 20.0625C58.8163 19.8807 59.0625 19.6307 59.2216 19.3125C59.3845 18.9943 59.4659 18.6288 59.4659 18.2159C59.4659 17.803 59.3845 17.4394 59.2216 17.125C59.0625 16.8106 58.8144 16.5663 58.4773 16.392C58.1439 16.214 57.714 16.125 57.1875 16.125H55.2557V26H53.1477ZM67.0355 26.1705C66.1832 26.1705 65.4446 25.983 64.8196 25.608C64.1946 25.233 63.7098 24.7083 63.3651 24.0341C63.0241 23.3598 62.8537 22.572 62.8537 21.6705C62.8537 20.7689 63.0241 19.9792 63.3651 19.3011C63.7098 18.6231 64.1946 18.0966 64.8196 17.7216C65.4446 17.3466 66.1832 17.1591 67.0355 17.1591C67.8878 17.1591 68.6264 17.3466 69.2514 17.7216C69.8764 18.0966 70.3594 18.6231 70.7003 19.3011C71.045 19.9792 71.2173 20.7689 71.2173 21.6705C71.2173 22.572 71.045 23.3598 70.7003 24.0341C70.3594 24.7083 69.8764 25.233 69.2514 25.608C68.6264 25.983 67.8878 26.1705 67.0355 26.1705ZM67.0469 24.5227C67.509 24.5227 67.8954 24.3958 68.206 24.142C68.5166 23.8845 68.7476 23.5398 68.8991 23.108C69.0545 22.6761 69.1321 22.1951 69.1321 21.6648C69.1321 21.1307 69.0545 20.6477 68.8991 20.2159C68.7476 19.7803 68.5166 19.4337 68.206 19.1761C67.8954 18.9186 67.509 18.7898 67.0469 18.7898C66.5734 18.7898 66.1795 18.9186 65.8651 19.1761C65.5545 19.4337 65.3215 19.7803 65.1662 20.2159C65.0147 20.6477 64.9389 21.1307 64.9389 21.6648C64.9389 22.1951 65.0147 22.6761 65.1662 23.108C65.3215 23.5398 65.5545 23.8845 65.8651 24.142C66.1795 24.3958 66.5734 24.5227 67.0469 24.5227ZM76.7699 26.1705C75.8987 26.1705 75.1506 25.9792 74.5256 25.5966C73.9044 25.214 73.4252 24.6856 73.0881 24.0114C72.7547 23.3333 72.5881 22.553 72.5881 21.6705C72.5881 20.7841 72.7585 20.0019 73.0994 19.3239C73.4403 18.642 73.9214 18.1117 74.5426 17.733C75.1676 17.3504 75.9063 17.1591 76.7585 17.1591C77.4669 17.1591 78.0938 17.2898 78.6392 17.5511C79.1884 17.8087 79.6259 18.1742 79.9517 18.6477C80.2775 19.1174 80.4631 19.6667 80.5085 20.2955H78.5426C78.4631 19.875 78.2737 19.5246 77.9744 19.2443C77.679 18.9602 77.2831 18.8182 76.7869 18.8182C76.3665 18.8182 75.9972 18.9318 75.679 19.1591C75.3608 19.3826 75.1127 19.7045 74.9347 20.125C74.7604 20.5455 74.6733 21.0492 74.6733 21.6364C74.6733 22.2311 74.7604 22.7424 74.9347 23.1705C75.1089 23.5947 75.3532 23.9223 75.6676 24.1534C75.9858 24.3807 76.3589 24.4943 76.7869 24.4943C77.09 24.4943 77.3608 24.4375 77.5994 24.3239C77.8419 24.2064 78.0445 24.0379 78.2074 23.8182C78.3703 23.5985 78.482 23.3314 78.5426 23.017H80.5085C80.4593 23.6345 80.2775 24.1818 79.9631 24.6591C79.6487 25.1326 79.2206 25.5038 78.679 25.7727C78.1373 26.0379 77.5009 26.1705 76.7699 26.1705ZM84.0724 23.2614L84.0668 20.7784H84.3963L87.5327 17.2727H89.9361L86.0781 21.5682H85.652L84.0724 23.2614ZM82.1974 26V14.3636H84.2543V26H82.1974ZM87.6747 26L84.8338 22.0284L86.2202 20.5795L90.1349 26H87.6747ZM94.8111 26.1705C93.9361 26.1705 93.1804 25.9886 92.544 25.625C91.9115 25.2576 91.4247 24.7386 91.0838 24.0682C90.7429 23.3939 90.5724 22.6004 90.5724 21.6875C90.5724 20.7898 90.7429 20.0019 91.0838 19.3239C91.4285 18.642 91.9096 18.1117 92.527 17.733C93.1444 17.3504 93.8698 17.1591 94.7031 17.1591C95.241 17.1591 95.7486 17.2462 96.2259 17.4205C96.7069 17.5909 97.1312 17.8561 97.4986 18.2159C97.8698 18.5758 98.1615 19.0341 98.3736 19.5909C98.5857 20.1439 98.6918 20.803 98.6918 21.5682V22.1989H91.5384V20.8125H96.7202C96.7164 20.4186 96.6312 20.0682 96.4645 19.7614C96.2978 19.4508 96.0649 19.2064 95.7656 19.0284C95.4702 18.8504 95.1255 18.7614 94.7315 18.7614C94.3111 18.7614 93.9418 18.8636 93.6236 19.0682C93.3054 19.2689 93.0573 19.5341 92.8793 19.8636C92.705 20.1894 92.616 20.5473 92.6122 20.9375V22.1477C92.6122 22.6553 92.705 23.0909 92.8906 23.4545C93.0762 23.8144 93.3357 24.0909 93.669 24.2841C94.0024 24.4735 94.3925 24.5682 94.8395 24.5682C95.1387 24.5682 95.4096 24.5265 95.652 24.4432C95.8944 24.3561 96.1046 24.2292 96.2827 24.0625C96.4607 23.8958 96.5952 23.6894 96.6861 23.4432L98.6065 23.6591C98.4853 24.1667 98.2543 24.6098 97.9134 24.9886C97.5762 25.3636 97.1444 25.6553 96.6179 25.8636C96.0914 26.0682 95.4891 26.1705 94.8111 26.1705ZM104.79 17.2727V18.8636H99.7727V17.2727H104.79ZM101.011 15.1818H103.068V23.375C103.068 23.6515 103.11 23.8636 103.193 24.0114C103.28 24.1553 103.394 24.2538 103.534 24.3068C103.674 24.3598 103.83 24.3864 104 24.3864C104.129 24.3864 104.246 24.3769 104.352 24.358C104.462 24.339 104.545 24.322 104.602 24.3068L104.949 25.9148C104.839 25.9527 104.682 25.9943 104.477 26.0398C104.277 26.0852 104.03 26.1117 103.739 26.1193C103.223 26.1345 102.759 26.0568 102.347 25.8864C101.934 25.7121 101.606 25.4432 101.364 25.0795C101.125 24.7159 101.008 24.2614 101.011 23.7159V15.1818Z"
                  />
                </svg>
              </Link>
              <div className="hidden lg:flex lg:gap-10">
                <a
                  className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                  href="/#features"
                >
                  <span className="relative z-10">Features</span>
                </a>
                <a
                  className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                  href="/#reviews"
                >
                  <span className="relative z-10">Reviews</span>
                </a>
                <a
                  className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                  href="/#pricing"
                >
                  <span className="relative z-10">Pricing</span>
                </a>
                <a
                  className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                  href="/#faqs"
                >
                  <span className="relative z-10">FAQs</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="lg:hidden" data-headlessui-state="">
                <button
                  className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 focus:not-data-focus:outline-hidden active:stroke-gray-900"
                  aria-label="Toggle site navigation"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
                    <path
                      d="M5 6h14M5 18h14M5 12h14"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <span
                hidden={{}}
                style={{
                  position: 'fixed',
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  borderWidth: 0,
                  display: 'none',
                }}
              />
              <div className="flex items-center gap-6 max-lg:hidden">
                <a
                  className="inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                  variant="outline"
                  color="gray"
                  href="/login"
                >
                  Log in
                </a>
                <a
                  className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
                  variant="solid"
                  color="gray"
                  href="#"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-auto">
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                  Invest at the perfect time.
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  By leveraging insights from our network of industry insiders, you’ll know exactly
                  when to buy to maximize profit, and exactly when to sell to avoid painful losses.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                  <a
                    aria-label="Download on the App Store"
                    className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                    href="#"
                  >
                    <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
                      <path
                        fill="currentColor"
                        d="M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.992-2.157c-1.679-.177-3.307 1.004-4.163 1.004-.872 0-2.19-.987-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.361 10.976.927 1.326 2.01 2.806 3.428 2.753 1.387-.057 1.905-.884 3.58-.884 1.658 0 2.144.884 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.635 4.635 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.068 3.068 0 0 1-2.848-1.584h-.043v4.485H46.63V21.442h1.8v1.506h.033a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.039-2.393-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.584h-.043v4.485h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.621Zm-1.91 0c0-1.834-.947-3.039-2.392-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.636c.214 0 .428.023.637.07v1.738a2.594 2.594 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731h2.155Zm-1.228 5.123h1.125a1.877 1.877 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.133h-1.125v4.28ZM41.68 12.445a2.133 2.133 0 1 1 4.248 0 2.132 2.132 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.209-1.547-.772 0-1.206.57-1.206 1.547 0 .984.434 1.55 1.207 1.55.769 0 1.208-.57 1.208-1.55ZM51.573 14.697h-.922l-.93-3.316h-.07l-.927 3.316h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.248 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.772 0-1.207.57-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.425c0-.81.604-1.278 1.676-1.344l1.22-.07v-.39c0-.475-.315-.744-.922-.744-.497 0-.84.183-.939.5h-.86c.09-.773.818-1.269 1.84-1.269 1.128 0 1.765.562 1.765 1.514v3.076h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.347Zm2.895-.385v-.376l-1.1.07c-.62.041-.9.252-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.984ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.711h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.9-1.869-2.327Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.939-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526ZM79.23 12.445a2.133 2.133 0 1 1 4.247 0 2.132 2.132 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.57-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM93.515 9.074v1.142h.976v.748h-.976v2.316c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.028-.322.043-.484.045-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.748h.715V9.074h.89ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.719-.335-1.083-.963-1.083a1.05 1.05 0 0 0-1.134 1.141v2.63h-.888v-6.26ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.302 2.047 2.047 0 0 1-2.08-2.324 2.093 2.093 0 0 1 .071-.88 2.08 2.08 0 0 1 2.005-1.473c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.077 1.077 0 0 0 1.071-.545h.855Zm-3.126-1.452h2.275a1.094 1.094 0 0 0-.667-1.084 1.086 1.086 0 0 0-.442-.082 1.151 1.151 0 0 0-1.166 1.166Z"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                    color="gray"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none"
                    >
                      <circle cx={12} cy={12} r="11.5" stroke="#D4D4D4" />
                      <path
                        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                        fill="#A3A3A3"
                        stroke="#A3A3A3"
                      />
                    </svg>
                    <span className="ml-2.5">Watch the video</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                <div className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/70 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-slow"
                  >
                    <path
                      d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                      stroke="#D4D4D4"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M513 1025C230.23 1025 1 795.77 1 513"
                      stroke="url(#_S_3_-gradient-1)"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="_S_3_-gradient-1"
                        x1={1}
                        y1={513}
                        x2={1}
                        y2={1025}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#06b6d4" />
                        <stop offset={1} stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
                  >
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                      stroke="#D4D4D4"
                      strokeOpacity="0.7"
                    />
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400"
                      stroke="url(#_S_3_-gradient-2)"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="_S_3_-gradient-2"
                        x1={913}
                        y1={513}
                        x2={913}
                        y2={913}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#06b6d4" />
                        <stop offset={1} stopColor="#06b6d4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="-mx-4 h-[448px] mask-[linear-gradient(to_bottom,white_60%,transparent)] px-9 sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                  <div className="relative aspect-366/729 mx-auto max-w-[366px]">
                    <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
                    <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                      <div className="flex flex-col">
                        <div className="flex justify-between px-4 pt-4">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none"
                          >
                            <path
                              d="M5 6h14M5 18h14M5 12h14"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 79 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 flex-none"
                          >
                            <path
                              d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                              fill="#06B6D4"
                            />
                            <path
                              d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                              fill="#fff"
                            />
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none"
                          >
                            <path
                              d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                              stroke="#fff"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="mt-6 flex-auto rounded-t-2xl bg-white">
                          <div className="p-4">
                            <div className="flex gap-2">
                              <div className="text-xs/6 text-gray-500">Tailwind Labs, Inc.</div>
                              <div className="text-sm text-gray-900">$CSS</div>
                              <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
                                <path
                                  d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                                  stroke="#171717"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className="mt-3 border-t border-gray-200 pt-5">
                              <div className="flex items-baseline gap-2">
                                <div className="text-2xl tracking-tight text-gray-900 tabular-nums">
                                  752.56
                                </div>
                                <div className="text-sm text-gray-900">USD</div>
                                <div className="ml-auto text-sm tracking-tight tabular-nums text-cyan-500">
                                  +12.21%
                                </div>
                              </div>
                              <div className="mt-6 flex gap-4 text-xs text-gray-500">
                                <div>1D</div>
                                <div>5D</div>
                                <div className="font-semibold text-cyan-600">1M</div>
                                <div>6M</div>
                                <div>1Y</div>
                                <div>5Y</div>
                              </div>
                              <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-black/5 ring-inset">
                                <svg viewBox="0 0 286 208" className="overflow-visible">
                                  <defs>
                                    <clipPath id="_R_3kl2luivb_-clip">
                                      <path d="M 16.0000 32.0000L 23.9375 47.4709L 31.8750 39.3576L 39.8125 80.0116L 47.7500 63.6279L 55.6875 79.3140L 63.6250 87.8140L 71.5625 98.9128L 79.5000 71.6366L 87.4375 127.3372L 95.3750 120.1308L 103.3125 112.3023L 111.2500 120.2355L 119.1875 144.6337L 127.1250 176.0000L 135.0625 162.2326L 143.0000 144.3634L 150.9375 152.3953L 158.8750 144.6221L 166.8125 129.9535L 174.7500 103.3517L 182.6875 112.3401L 190.6250 136.2645L 198.5625 129.6337L 206.5000 120.0959L 214.4375 153.2965L 222.3750 136.5233L 230.3125 143.7035L 238.2500 132.5581L 246.1875 159.0494L 254.1250 144.2413L 262.0625 127.0233L 270.0000 103.2209 V 176 H 16 Z" />
                                    </clipPath>
                                    <linearGradient
                                      id="_R_3kl2luivb_-gradient"
                                      x1={0}
                                      x2={0}
                                      y1={0}
                                      y2={1}
                                    >
                                      <stop offset="0%" stopColor="#13B5C8" />
                                      <stop offset="100%" stopColor="#13B5C8" stopOpacity={0} />
                                    </linearGradient>
                                  </defs>
                                  <line
                                    stroke="#a3a3a3"
                                    opacity="0.1"
                                    x1={0}
                                    y1="34.666666666666664"
                                    x2={286}
                                    y2="34.666666666666664"
                                  />
                                  <line
                                    stroke="#a3a3a3"
                                    opacity="0.1"
                                    x1={0}
                                    y1="69.33333333333333"
                                    x2={286}
                                    y2="69.33333333333333"
                                  />
                                  <line
                                    stroke="#a3a3a3"
                                    opacity="0.1"
                                    x1={0}
                                    y1={104}
                                    x2={286}
                                    y2={104}
                                  />
                                  <line
                                    stroke="#a3a3a3"
                                    opacity="0.1"
                                    x1={0}
                                    y1="138.66666666666666"
                                    x2={286}
                                    y2="138.66666666666666"
                                  />
                                  <line
                                    stroke="#a3a3a3"
                                    opacity="0.1"
                                    x1={0}
                                    y1="173.33333333333331"
                                    x2={286}
                                    y2="173.33333333333331"
                                  />
                                  <rect
                                    y={32}
                                    width="0px"
                                    height={144}
                                    fill="url(#_R_3kl2luivb_-gradient)"
                                    clipPath="url(#_R_3kl2luivb_-clip)"
                                    opacity="0.5"
                                  />
                                  <path
                                    d="M 16.0000 32.0000L 23.9375 47.4709L 31.8750 39.3576L 39.8125 80.0116L 47.7500 63.6279L 55.6875 79.3140L 63.6250 87.8140L 71.5625 98.9128L 79.5000 71.6366L 87.4375 127.3372L 95.3750 120.1308L 103.3125 112.3023L 111.2500 120.2355L 119.1875 144.6337L 127.1250 176.0000L 135.0625 162.2326L 143.0000 144.3634L 150.9375 152.3953L 158.8750 144.6221L 166.8125 129.9535L 174.7500 103.3517L 182.6875 112.3401L 190.6250 136.2645L 198.5625 129.6337L 206.5000 120.0959L 214.4375 153.2965L 222.3750 136.5233L 230.3125 143.7035L 238.2500 132.5581L 246.1875 159.0494L 254.1250 144.2413L 262.0625 127.0233L 270.0000 103.2209"
                                    fill="none"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    pathLength={1}
                                    strokeDashoffset="0px"
                                    strokeDasharray="0px 1px"
                                  />
                                </svg>
                              </div>
                              <div className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white">
                                Trade
                              </div>
                              <div className="mt-3 divide-y divide-gray-100 text-sm">
                                <div className="flex justify-between py-1">
                                  <div className="text-gray-500">Open</div>
                                  <div className="font-medium text-gray-900">6,387.55</div>
                                </div>
                                <div className="flex justify-between py-1">
                                  <div className="text-gray-500">Closed</div>
                                  <div className="font-medium text-gray-900">6,487.09</div>
                                </div>
                                <div className="flex justify-between py-1">
                                  <div className="text-gray-500">Low</div>
                                  <div className="font-medium text-gray-900">6,322.01</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 366 729"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100"
                    >
                      <path
                        fill="#F2F2F2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                      />
                      <rect x={154} y={29} width={56} height={5} rx="2.5" fill="#D4D4D4" />
                    </svg>
                    <img
                      alt=""
                      width={366}
                      height={729}
                      decoding="async"
                      data-nimg={1}
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      style={{ color: 'transparent' }}
                      src="images/phone-frame.d4b6b62a.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
                  As featured in
                </p>
                <ul
                  role="list"
                  className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
                >
                  <li className="flex">
                    <img
                      alt="Forbes"
                      loading="lazy"
                      width={82}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/forbes.c4b4b0dd.svg"
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="TechCrunch"
                      loading="lazy"
                      width={181}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/techcrunch.fe121d74.svg"
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="Wired"
                      loading="lazy"
                      width={121}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/wired.42c588dc.svg"
                    />
                  </li>
                  <li className="flex hidden xl:block">
                    <img
                      alt="CNN"
                      loading="lazy"
                      width={68}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/cnn.eaae184a.svg"
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="BBC"
                      loading="lazy"
                      width={83}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/bbc.9cfc75a9.svg"
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="CBS"
                      loading="lazy"
                      width={101}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/cbs.aa596395.svg"
                    />
                  </li>
                  <li className="flex">
                    <img
                      alt="Fast Company"
                      loading="lazy"
                      width={124}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/fast-company.8fba32a5.svg"
                    />
                  </li>
                  <li className="flex hidden xl:block">
                    <img
                      alt="HuffPost"
                      loading="lazy"
                      width={142}
                      height={32}
                      decoding="async"
                      data-nimg={1}
                      className="h-8"
                      style={{ color: 'transparent' }}
                      src="images/huffpost.eeec742f.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
