'use client'
import Link from 'next/link'
import { Logo } from './Logo'

import { Container } from './Container'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='border-t pt-4 pb-12 lg:pb-0'>
      <Container>
        <div className='flex flex-col gap-2 md:grid md:grid-cols-3 md:items-center'>
          {/* Logo */}
          <div className='flex justify-center md:justify-start'>
            <Logo className='hover:opacity-50 transition-opacity' />
          </div>

          {/* Centro */}
          <div className='text-center text-sm text-gray-700 dark:text-gray-400'>
            <span className='ml-2'>2023 - {year} All Rights Reserved</span>
          </div>

          {/* Links */}
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-400 md:justify-end'>
            <span>Relizado con 💛​ por</span>
            <Link
              href='https://github.com/Kapelu'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-[#533070]'>
              @KWS
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
