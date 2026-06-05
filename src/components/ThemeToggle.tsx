'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from './Button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Cambiar tema'
      className='h-auto p-0'>
      <Image
        src={theme === 'light' ? '/toggle-light.svg' : '/toggle-dark.svg'}
        alt='Theme Toggle'
        width={38}
        height={38}
        priority
      />
    </Button>
  )
}
