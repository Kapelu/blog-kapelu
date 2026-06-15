import {
  Alert,
  Button,
  SearchIcon,
  EyeIcon,
  EyeOffIcon,
  Input,
  Logo,
} from '@/components'
import Link from 'next/link'

type Props = React.HTMLAttributes<HTMLElement>

export const mdxComponents = {
  Alert,
  Button,
  SearchIcon,
  EyeIcon,
  EyeOffIcon,
  Input,
  Logo,

  h1: (props: Props) => (
    <h1
      className='mb-6 mt-10 text-4xl text-center font-bold tracking-tight'
      {...props}
    />
  ),

  h2: (props: Props) => (
    <h2 className='mb-4 mt-8 text-3xl font-semibold' {...props} />
  ),

  h3: (props: Props) => (
    <h3 className='mb-3 mt-8 text-2xl font-semibold' {...props} />
  ),

  h4: (props: Props) => (
    <h4 className='mb-3 mt-8 text-1xl font-semibold' {...props} />
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

  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal =
      href?.startsWith('http://') || href?.startsWith('https://')

    return (
      <Link
        href={href ?? '#'}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className='font-medium text-blue-600 underline underline-offset-4 hover:opacity-80 dark:text-blue-400'
        {...props}>
        {props.children}
      </Link>
    )
  },

  pre: (props: Props) => (
    <pre
      className='my-4 overflow-x-auto rounded-xl text-blue-400 border border-neutral-800 bg-cyan-950 p-3 shadow-lg'
      {...props}
    />
  ),

  code: (props: Props) => (
    <code className='font-mono text-sm leading-7 text-slate-100' {...props} />
  ),

  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt} className='my-8 rounded-xl' />
  ),
}
