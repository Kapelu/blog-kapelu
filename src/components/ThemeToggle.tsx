'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' {...props}>
      <circle cx='12' cy='12' r='5' fill='#FACC15' />

      <line x1='12' y1='1' x2='12' y2='3' stroke='#FACC15' />
      <line x1='12' y1='21' x2='12' y2='23' stroke='#FACC15' />
      <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' stroke='#FACC15' />
      <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' stroke='#FACC15' />
      <line x1='1' y1='12' x2='3' y2='12' stroke='#FACC15' />
      <line x1='21' y1='12' x2='23' y2='12' stroke='#FACC15' />
      <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' stroke='#FACC15' />
      <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' stroke='#FACC15' />
    </svg>
  )
}

function MoonStarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' {...props}>
      <path
        d='M21 12.8A9 9 0 1 1 11.2 3
          7 7 0 0 0 21 12.8z'
        fill='#9CA3AF'
      />

      <path
        d='M17 4l.7 1.8L19.5 6.5l-1.8.7L17 9l-.7-1.8L14.5 6.5l1.8-.7L17 4z'
        fill='#FFFFFF'
      />
    </svg>
  )
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [rotating, setRotating] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button aria-label='Cambiar tema' className='h-9.5 w-9.5' />
  }

  const isDark = resolvedTheme === 'dark'

  const handleToggle = () => {
    setRotating(true)

    setTheme(isDark ? 'light' : 'dark')

    setTimeout(() => {
      setRotating(false)
    }, 500)
  }

  return (
    <button
      onClick={handleToggle}
      aria-label='Cambiar tema'
      className='h-9.5 w-9.5 flex items-center justify-center'>
      <div
        className={`
          transition-transform duration-500
          ${rotating ? 'rotate-180' : 'rotate-0'}
        `}>
        {isDark ? (
          <SunIcon className='h-6 w-6' />
        ) : (
          <MoonStarIcon className='h-6 w-6' />
        )}
      </div>
    </button>
  )
}
