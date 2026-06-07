'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className='w-9.5 h-9.5' />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label='Cambiar tema'>
      <img
        src={isDark ? '/toggle-dark.svg' : '/toggle-light.svg'}
        width={38}
        height={38}
        alt='Theme Toggle'
      />
    </button>
  )
}
