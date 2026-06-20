import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <section className='relative min-h-screen overflow-hidden bg-background'>
      {/* Luna (detrás) */}
      <Image
        src='/images/404-1.png'
        alt='Moon'
        width={140}
        height={140}
        className='absolute top-12 right-2 z-5 animate-float opacity-90 md:top-24 md:right-30 md:w-50 h-auto'
      />

      {/* Nubes (delante de la luna)*/}
      <Image
        src='/images/404.png'
        alt='Clouds'
        fill
        sizes='100vw'
        priority
        className='absolute inset-0 z-20 object-cover object-left animate-clouds'
      />

      {/* Overlay suave */}
      <div className='absolute inset-0 z-30 bg-background/20' />

      {/* Contenido */}
      <div className='relative z-40 flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
        <h1 className='font-gentium text-8xl font-bold text-title md:text-9xl'>
          404
        </h1>

        <h2 className='text-3xl font-semibold text-title'>
          Página no encontrada
        </h2>

        <p className='font-gentium max-w-md text-xl italic text-text'>
          Lo sentimos, la página que buscas se perdió entre las nubes y la luz
          de la luna.
        </p>

        <Link
          href='/'
          className='rounded-lg border border-border px-6 py-3 text-link transition hover:bg-primary/10'>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
