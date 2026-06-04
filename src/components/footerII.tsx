import Image from 'next/image'
import Link from 'next/link'
import { Container } from './Container'

export default function Footer() {
  return (
    <footer className='border-t'>
      <Container>
        <div className='flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center gap-3'>
            <Image src='/logo.png' alt='Logo' width={32} height={32} />

            <span className='font-semibold'>
              Keiko<span className='opacity-70'>Dev</span>
            </span>
          </Link>

          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} KeikoDev
          </p>
        </div>
      </Container>
    </footer>
  )
}
