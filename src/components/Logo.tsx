import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  href?: string
  className?: string
}

export function Logo({ href = '/', className = '' }: LogoProps) {
  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      <Image
        src='/logo.png'
        width={36}
        height={36}
        alt='Kapelu Logo'
        priority
      />

      <span className='hidden text-2xl font-bold lg:block'></span>
    </Link>
  )
}
