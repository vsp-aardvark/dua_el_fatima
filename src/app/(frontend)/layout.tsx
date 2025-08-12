import React from 'react'
import './styles.css'
import { Metadata } from 'next'

// app/metadata.js or layout.js
export const metadata: Metadata = {
  title: 'Dua El Fatuma (SWA)',
  description:
    'Dua El Fatuma (SWA) – A curated collection of Indian and Pakistani poems, bringing together soulful verses, cultural heritage, and timeless expressions of love, life, and faith.',
  keywords: [
    'Dua El Fatuma',
    'Indian poems',
    'Pakistani poems',
    'Urdu poetry',
    'Hindi poetry',
    'Shayari',
    'Romantic poems',
    'Sufi poetry',
    'Ghazals',
  ],
  authors: [{ name: 'Tenacle Inc - Software Developer' }],
  creator: 'Tenacle Inc - Software Developer',
  publisher: 'Tenacle Inc - Software Developer',
  applicationName: 'Dua El Fatuma (SWA)',
  category: 'Literature',
  openGraph: {
    title: 'Dua El Fatuma (SWA)',
    description:
      'Discover Indian and Pakistani poetry – a blend of Urdu, Hindi, and regional verse capturing emotion, culture, and spirituality.',
    url: 'https://dua-el-fatima.vercel.app/',
    siteName: 'Dua El Fatuma (SWA)',
    images: [
      {
        url: 'https://dua-el-fatima.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dua El Fatuma (SWA) – Indian & Pakistani Poems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dua El Fatuma (SWA)',
    description:
      'Explore a curated selection of Indian and Pakistani poems – from romantic ghazals to soulful sufi verses.',
    images: ['https://dua-el-fatima.vercel.app/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" data-theme="light" className={"bg-gray-50 antialiased __variable_e8ce0c"}>
      <body>{children}</body>
    </html>
  )
}
