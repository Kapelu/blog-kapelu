// src/mdx/components.tsx
import { Button } from '@/components/Button'

export const mdxComponents = {
  Button,

  h1: (props: any) => (
    <h1 className='text-4xl font-bold tracking-tight mb-6' {...props} />
  ),

  h2: (props: any) => (
    <h2 className='text-2xl font-semibold mt-10 mb-4' {...props} />
  ),

  p: (props: any) => (
    <p
      className='text-base leading-7 text-neutral-800 dark:text-neutral-200 mb-4'
      {...props}
    />
  ),

  a: (props: any) => (
    <a
      className='text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:opacity-80'
      {...props}
    />
  ),

  code: (props: any) => (
    <code
      className='bg-neutral-200 dark:bg-neutral-800 px-1 py-0.5 rounded text-sm'
      {...props}
    />
  ),
}
