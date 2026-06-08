import { Alert } from '@/components/ui/Alert'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

type Props = React.HTMLAttributes<HTMLElement>

export const mdxComponents = {
  Alert,
  Button,

  h1: (props: Props) => (
    <h1 className='mb-6 mt-10 text-4xl font-bold tracking-tight' {...props} />
  ),

  h2: (props: Props) => (
    <h2 className='mb-4 mt-10 text-3xl font-semibold' {...props} />
  ),

  h3: (props: Props) => (
    <h3 className='mb-3 mt-8 text-2xl font-semibold' {...props} />
  ),

  p: (props: Props) => (
    <p
      className='mb-5 leading-8 text-neutral-700 dark:text-neutral-300'
      {...props}
    />
  ),

  ul: (props: Props) => (
    <ul className='mb-6 ml-6 list-disc space-y-2' {...props} />
  ),

  ol: (props: Props) => (
    <ol className='mb-6 ml-6 list-decimal space-y-2' {...props} />
  ),

  li: (props: Props) => <li className='leading-7' {...props} />,

  blockquote: (props: Props) => (
    <blockquote
      className='my-6 border-l-4 border-primary pl-4 italic'
      {...props}
    />
  ),

  hr: () => <hr className='my-10 border-neutral-300 dark:border-neutral-700' />,

  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={href ?? '#'}
      className='font-medium text-blue-600 underline underline-offset-4 hover:opacity-80 dark:text-blue-400'>
      {props.children}
    </Link>
  ),

  code: (props: Props) => (
    <code
      className='rounded bg-neutral-200 px-1.5 py-0.5 text-sm dark:bg-neutral-800'
      {...props}
    />
  ),

  pre: (props: Props) => (
    <pre
      className='my-6 overflow-x-auto rounded-xl bg-neutral-900 p-4 text-neutral-100'
      {...props}
    />
  ),

  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt} className='my-8 rounded-xl' />
  ),
}
