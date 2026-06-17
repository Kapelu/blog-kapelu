import Link from 'next/link'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  href?: string
}

const base =
  'inline-flex items-center justify-center rounded-md border font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 !no-underline [&>p]:m-0 [&>p]:leading-none'

const variants = {
  primary:
    'border-border bg-background text-title hover:bg-muted hover:text-link',

  secondary: 'border-border bg-muted text-link hover:brightness-105',

  ghost:
    'border-border bg-background text-foreground hover:bg-muted hover:text-link',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  loading = false,
  href,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = clsx(
    base,
    variants[variant],
    sizes[size],
    loading && 'cursor-wait opacity-70',
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button disabled={disabled || loading} className={classes} {...props}>
      {loading ? 'Cargando...' : children}
    </button>
  )
}
