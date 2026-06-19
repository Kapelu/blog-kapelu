import {
  Alert,
  Button,
  SearchIcon,
  EyeIcon,
  EyeOffIcon,
  Input,
  Logo,
  PostCardAutor,
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
  PostCardAutor,

  h1: (props: Props) => (
    <h1
      className='mb-6 mt-10 text-4xl text-center font-bold tracking-tight'
      {...props}
    />
  ),

  blocfooter: (props: Props) => (
    <blockquote
      className='my-6 border-l-4 border-primary pl-4 italic'
      {...props}
    />
  ),

  ul: (props: Props) => <ul className='my-6 space-y-3' {...props} />,

  li: (props: Props) => (
    <li className='flex items-start gap-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        className='mt-1 h-5 w-5 shrink-0 text-green-500'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
      </svg>

      <span>{props.children}</span>
    </li>
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
        {...props}
      />
    )
  },
}