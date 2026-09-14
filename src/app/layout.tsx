import type { Metadata } from 'next'
import { Gentium_Book_Plus } from 'next/font/google'
import { AppConfig } from '@/lib/AppConfig'
import { ComeBack } from '@/components/ComeBack'
import { Container } from '@/components/Container'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),

  title: {
    default: AppConfig.title,
    template: '%s | Daniel Calderon',
  },

  description: AppConfig.description,
  keywords: AppConfig.keywords,

  authors: [
    {
      name: AppConfig.author,
      url: AppConfig.url,
    },
  ],

  creator: AppConfig.author,
  publisher: AppConfig.author,

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: AppConfig.url,
  },

  openGraph: {
    title: AppConfig.title,
    description: AppConfig.description,
    url: AppConfig.url,
    siteName: AppConfig.site_name,
    locale: AppConfig.locale,
    type: 'website',
    images: [
      {
        url: new URL(AppConfig.image, AppConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: AppConfig.title,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: AppConfig.title,
    description: AppConfig.description,
    creator: '@DanielDCalderon',
    images: [new URL(AppConfig.image, AppConfig.url).toString()],
  },

  category: 'technology',

  applicationName: AppConfig.site_name,

  referrer: 'origin-when-cross-origin',

  generator: 'Next.js',

  icons: {
    icon: [
      { url: '/images/Favicon/favicon.ico' },
      {
        url: '/images/Favicon/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/images/Favicon/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/images/Favicon/apple-touch-icon.png',
  },
}

const gentium = Gentium_Book_Plus({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'],
  variable: '--font-gentium',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      className={`dark ${gentium.variable}`}
      suppressHydrationWarning>
      <body>
        <Providers>
          <ComeBack />
          <main className='mb-8'>
            <Header />
            <Container>{children}</Container>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
