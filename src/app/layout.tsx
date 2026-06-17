import type { Metadata } from 'next'
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
        url: AppConfig.image,
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

    creator: '@kapelu',

    images: [AppConfig.image],
  },

  category: 'technology',

  applicationName: AppConfig.site_name,

  referrer: 'origin-when-cross-origin',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='dark' suppressHydrationWarning>
      <body>
        <Providers>
          {/* HERO BACKGROUND GLOBAL 
          <div className='fixed inset-0 -z-10'>
            <Image
              src='/bg.png'
              alt='Background'
              fill
              priority
              className='object-cover'
            />
            <div className='absolute inset-0 bg-black/50' />
          </div>*/}
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
