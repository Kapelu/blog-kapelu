'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
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
    label: 'Contacto',
    href: '/contacto',
  },
]

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className='border-b'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3'>
            <Image src='/logo.png' alt='Logo' width={40} height={40} priority />

            <span className='text-lg font-bold'>
              Keiko<span className='opacity-70'>Dev</span>
            </span>
          </Link>

          {/* Navegación */}
          <nav className='flex items-center gap-6'>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-blue-500 ${
                  pathname === link.href ? 'font-semibold text-blue-500' : ''
                }`}>
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label='Cambiar tema'
              className='rounded-md border px-3 py-1 text-sm'>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>
        </div>
      </Container>
    </header>
  )
}
