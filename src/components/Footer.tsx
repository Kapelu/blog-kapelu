'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Container } from './Container'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='border-t py-4'>
      <Container>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-3 md:items-center'>
          {/* Logo */}
          <div className='flex justify-center md:justify-start'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/logo.png'
                width={36}
                height={36}
                alt='logo'
                priority
              />

              <span className='text-2xl font-bold'>Kapelu</span>
            </Link>
          </div>

          {/* Centro */}
          <div className='text-center text-sm text-gray-700 dark:text-gray-400'>
            <Link
              href='https://github.com/Kapelu'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-[#533070]'>
              @kapelu
            </Link>

            <span className='ml-2'>2024 - {year} All Rights Reserved</span>
          </div>

          {/* Links */}
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 dark:text-gray-400 md:justify-end'>
            <Link href='/'>Terms of Use</Link>

            <Link href='/'>Privacy Policy</Link>

            <Link href='/'>Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
