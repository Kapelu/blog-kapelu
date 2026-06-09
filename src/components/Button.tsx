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
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black',
  secondary:
    'bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white',
  ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900',
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
    loading && 'opacity-70 cursor-wait',
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
