'use client'
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'

const links = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Acerca',
    href: '/acerca',
  },
  {
    label: 'Contacto',
    href: '/contacto',
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <>
      <header className='fixed bottom-0 left-0 z-50 w-full border-t bg-sky-600 lg:sticky lg:top-0 lg:border-t-0 lg:border-b'>
        <Container>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
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

            {/* Desktop */}
            <div className='hidden items-center gap-10 lg:flex'>
              <nav className='flex gap-8'>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-semibold transition ${
                      pathname === link.href
                        ? 'bg-sky-600 text-sky-950'
                        : 'text-sky-950 hover:bg-sky-950 hover:text-white'
                    }`}>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label='Cambiar tema'>
                <Image
                  src={
                    theme === 'light' ? '/toggle-light.svg' : '/toggle-dark.svg'
                  }
                  alt='Theme Toggle'
                  width={38}
                  height={28}
                  priority
                />
              </button>
            </div>

            {/* Mobile */}
            <div className='flex flex-1 items-center justify-evenly lg:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='rounded-lg border border-sky-900 p-1'
                aria-label='Abrir menú'>
                {isMenuOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    className='fill-sky-950'>
                    <path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    className='fill-sky-950'>
                    <path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label='Cambiar tema'>
                <Image
                  src={
                    theme === 'light' ? '/toggle-light.svg' : '/toggle-dark.svg'
                  }
                  alt='Theme Toggle'
                  width={38}
                  height={28}
                  priority
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <nav
            className={`fixed bottom-16 left-0 z-40 w-full bg-sky-600 transition-all duration-300 lg:hidden ${
              isMenuOpen
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0'
            }`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block p-4 text-center text-xl font-bold transition ${
                  pathname === link.href
                    ? 'text-sky-950'
                    : 'text-sky-950 hover:bg-sky-950 hover:text-white'
                }`}>
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </header>
    </>
  )
}
