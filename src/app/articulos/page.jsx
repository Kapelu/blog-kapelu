'use client'

import Image from 'next/image'
import Link from 'next/link'

import {usePathname} from 'next/navigation'

import {AppConfig} from '@/utils/AppConfig'
//import Link from 'next/link'

export default function Articles() {
	const pathname = usePathname()
	const isActive = pathname === '/'

	return (
		<>
			<article className='text-center'>
				<h1 className='section-title'>Articulos</h1>
				<figure className='flex justify-center'>
					<Image
						className='foto-perfil'
						width='320'
						height='320'
						src='/kapelu.webp'
						alt='Daniel Calderon'
					/>
				</figure>
				<br />
				<br />
				<p className='text-[13px] text-gray-700 dark:text-gray-300'>
					dfdfdf
				</p>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<p>.</p>
			</article>
		</>
	)
}
