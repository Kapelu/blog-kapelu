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
        {...props}
      />
    )
  },
}