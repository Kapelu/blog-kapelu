'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface PostCardAutorProps {
  image: string
  name: string
  description: string
  href: string
  className?: string
}

export function PostCardAutor({
  image,
  name,
  description,
  href,
  className,
}: PostCardAutorProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'group mx-auto my-8 block w-full max-w-2xl no-underline!',
        '**:no-underline',
        className,
      )}>
      <article
        className={clsx(
          'not-prose rounded-2xl border border-cyan bg-cyan/10 p-5 shadow-md',
          'transition-all duration-300',
          'hover:-translate-y-1 hover:border-cyan/80 hover:shadow-lg',
        )}>
        <div className='flex items-center gap-6'>
          {/* Columna izquierda */}
          <div className='flex min-w-[120px] flex-col items-center'>
            <Image
              width={90}
              height={90}
              src={image}
              alt={name}
              className={clsx(
                'my-1 h-[90px] w-[90px]',
                'rounded-full border border-border object-cover',
                'shadow-lg transition-transform duration-300',
                'group-hover:scale-105',
              )}
              priority
            />

            <h2
              className={clsx(
                'font-gentium my-0.5',
                'text-center text-lg font-bold text-title',
              )}>
              {name}
            </h2>
          </div>

          {/* Columna derecha */}
          <p
            className={clsx(
              'font-gentium m-0 flex-1',
              'text-sm leading-6 text-text md:text-base',
            )}>
            {description}
          </p>
        </div>
      </article>
    </Link>
  )
}
