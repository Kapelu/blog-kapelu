'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Container } from '../Container'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca', href: '/about' },
  { label: 'Contacto', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className='fixed bottom-0 left-0 z-50 w-full border-t bg-primary lg:sticky lg:top-0 lg:border-b lg:border-t-0'>
      <Container>
        <div className='grid h-16 grid-cols-3 items-center lg:flex lg:items-center lg:justify-between'>
          {/* Logo - izquierda */}
          <div className='justify-self-start lg:flex lg:items-center'>
            <Logo className='transition-opacity hover:opacity-50' />
          </div>

          {/* Hamburguesa - centro (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='justify-self-center rounded-lg border border-sky-900 p-1 lg:hidden'
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

          {/* Toggle - derecha */}
          <div className='justify-self-end lg:hidden'>
            <ThemeToggle />
          </div>

          {/* Desktop nav */}
          <div className='hidden items-center gap-10 lg:flex'>
            <nav className='flex gap-8'>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-0.5 font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-sky-950 hover:bg-sky-950/50 hover:text-white'
                  }`}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`fixed bottom-16 left-0 z-40 w-full bg-primary transition-all duration-300 lg:hidden ${
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
  )
}
