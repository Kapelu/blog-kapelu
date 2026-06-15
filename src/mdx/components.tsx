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