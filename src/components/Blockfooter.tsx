'use client'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface BlockfooterProps {
  children: ReactNode
  author?: string
  className?: string
}

export function Blockfooter({
  children,
  author,
  className,
}: BlockfooterProps) {
  return (
    <blockquote
      className={clsx(
        'mx-auto my-10 w-full max-w-2xl',
        'rounded-2xl border border-cyan bg-cyan/10 p-6 shadow-md',
        className,
      )}>
      <div
        className={clsx(
          'font-gentium space-y-4 text-lg font-medium italic text-title leading-4 md:text-xl',
        )}>
        {children}
      </div>
      {/*space-y-6 text-lg leading-9 text-foreground*/}
      {author && (
        <footer className='mt-2 text-right text-sm font-semibold text-cyan'>
          — {author}
        </footer>
      )}
    </blockquote>
  )
}
