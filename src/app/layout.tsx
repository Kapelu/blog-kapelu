import type {Metadata} from 'next'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
	title: 'Blog de Daniel Calderon',
	description: 'Generado con create next app',
	manifest: '/manifest.json',
	icons: {
		apple: '/icon.png',
	}
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
   const theme = {
		backgroundColor:'var(--backgroung-color-home)',
	}
	return (
		<html lang='es'>
			<body
				style={theme}
				suppressHydrationWarning={true}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}

/* 
import {Inter} from 'next/font/google'
const inter = Inter({subsets: ['latin']})
className={inter.className} 
*/
