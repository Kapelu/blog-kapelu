import Image from 'next/image'
import { Button } from '@/components/Button'
import type { Metadata } from 'next'
import { WEBSITE_HOST_URL } from '@/lib/constants'

const meta = {
  title: 'Sobre mí',
  description: 'Soy un autodidacta que disfruta aprender a programar',
  url: `${WEBSITE_HOST_URL}/about`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Script Bash',
  'GitHub',
]

export default function About() {
  return (
    <div className='container mx-auto max-w-6xl px-4 py-14'>
      <div className='flex flex-col gap-20'>
        {/* HERO */}
        <section className='flex flex-col items-center text-center'>
          {/* FOTO */}
          <div className='overflow-hidden rounded-full border border-border shadow-lg'>
            <Image
              src='/images/kapelu.png'
              alt='Daniel Calderón'
              width={200}
              height={200}
              priority
              className='h-auto w-auto object-cover'
            />
          </div>

          {/* NOMBRE */}
          <h1 className='mt-8 text-4xl font-bold tracking-tight text-title md:text-6xl'>
            Daniel Calderón
          </h1>

          {/* CARGO */}
          <p className='mt-4 text-lg font-medium text-foreground md:text-3xl'>
            Desarrollador Full Stack
          </p>

          {/* REDES */}
          <div className='mt-8 flex justify-center gap-4'>
            {/* GitHub */}
            <a
              href='https://github.com/tuusuario'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
              className='rounded-full border border-cyan bg-cyan/10 p-3 text-cyan transition-all duration-200 hover:-translate-y-1 hover:bg-cyan/20 hover:shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-6 w-6 fill-current'>
                <path d='M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.1.78-.25.78-.56 0-.28-.01-1.19-.02-2.16-3.2.69-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.18a10.8 10.8 0 0 1 5.72 0c2.17-1.49 3.13-1.18 3.13-1.18.63 1.57.24 2.73.12 3.02.73.81 1.18 1.84 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z' />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href='https://linkedin.com/in/tuusuario'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              className='rounded-full border border-cyan bg-cyan/10 p-3 text-cyan transition-all duration-200 hover:-translate-y-1 hover:bg-cyan/20 hover:shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-6 w-6 fill-current'>
                <path d='M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.66 4.8 6.11V21h-4v-5.65c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.18 1.47-2.18 2.98V21h-4V9Z' />
              </svg>
            </a>

            {/* Portafolio */}
            <a
              href='/'
              aria-label='Portafolio'
              className='rounded-full border border-cyan bg-cyan/10 p-3 text-cyan transition-all duration-200 hover:-translate-y-1 hover:bg-cyan/20 hover:shadow-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'>
                <rect x='3' y='4' width='18' height='16' rx='2' />
                <path d='M8 2v4' />
                <path d='M16 2v4' />
                <path d='M3 10h18' />
                <path d='M9 15h6' />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <Button href='/contact' variant='primary' size='lg' className='mt-8'>
            ¿Trabajamos juntos?
          </Button>

          {/* FRASE */}
          <blockquote className='mt-10 max-w-2xl rounded-2xl border border-cyan bg-cyan/10 p-6 shadow-md'>
            <p className='text-lg font-medium italic text-title md:text-xl'>
              "No soy un gran programador. Solo soy un buen programador con
              excelentes hábitos"
            </p>

            <footer className='mt-4 text-right text-sm font-semibold text-cyan'>
              — Kent Beck
            </footer>
          </blockquote>

          {/* TECNOLOGÍAS */}
          <div className='mt-12'>
            <h2 className='mb-6 text-xl font-bold text-title'>
              Tecnologías favoritas
            </h2>

            <div className='flex flex-wrap justify-center gap-3'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full border border-cyan bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan transition hover:bg-cyan/20'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* MI HISTORIA */}
        <section className='mx-auto max-w-4xl'>
          <h2 className='mb-8 text-center text-3xl font-bold text-title'>
            Mi historia
          </h2>

          <div className='space-y-6 text-lg leading-9 text-foreground'>
            <p>
              Soy un desarrollador web autodidacta. Durante los últimos años he
              dedicado gran parte de mi tiempo a aprender y mejorar mis
              habilidades en el desarrollo de aplicaciones modernas.
            </p>

            <p>
              Me considero una persona comprometida, curiosa y enfocada en el
              aprendizaje continuo. Aunque disfruto especialmente del desarrollo
              Frontend, también trabajo con Backend y bases de datos.
            </p>

            <p>
              Disfruto resolver problemas, crear experiencias de usuario
              intuitivas y enfrentar nuevos desafíos que me permitan crecer
              profesionalmente.
            </p>

            <p>
              Mi objetivo es formar parte de proyectos donde pueda aportar
              valor, seguir aprendiendo y colaborar con equipos que compartan la
              pasión por construir productos de calidad.
            </p>
          </div>
        </section>

        {/* FRASE PELÉ */}
        <section className='mx-auto w-full max-w-5xl'>
          <div className='overflow-hidden rounded-2xl border border-border shadow-lg'>
            <Image
              src='/images/frasePele.jpg'
              alt='Frase de Pelé'
              width={1200}
              height={800}
              sizes='100vw'
              className='h-auto w-full'
            />
          </div>
        </section>
      </div>
    </div>
  )
}
