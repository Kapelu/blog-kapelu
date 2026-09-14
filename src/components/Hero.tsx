import Image from 'next/image'

export function Hero() {
  return (
    <section className='relative h-75 w-full overflow-hidden'>
      <Image
        src='/bg.png'
        alt='Hero blog'
        fill
        priority
        className='object-cover'
      />

      {/* overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* contenido */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-3xl font-bold text-white md:text-5xl'>
          Blog de Daniel Calderón
        </h1>
      </div>
    </section>
  )
}
