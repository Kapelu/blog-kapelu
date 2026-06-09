import { ComeBack } from '@/components/ComeBack'
import { Container } from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import { Providers } from './providers'

import './globals.css'

const meta = {
  title: 'Blog | Daniel Calderon',
  description:
    'Blog de articulos que fui creando en mi camino a full Stack developer',
  image: `${WEBSITE_HOST_URL}/logo.png`,
}

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_HOST_URL),
  title: {
    default: meta.title,
    template: '%s | Daniel Calderon',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'es-AR',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
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
