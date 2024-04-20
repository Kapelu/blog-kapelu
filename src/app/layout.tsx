import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import '@/style/global.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const meta = {
  title: 'Blog | Daniel Calderon',
  description:
    'Blog de articulos que fui creando en mi camino a full Stack developer',
  image: `${WEBSITE_HOST_URL}/logo.png`,
}

export const metadata: Metadata = {
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className='mb-8'>
            <Container>{children}</Container>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
