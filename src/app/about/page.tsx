import Image from 'next/image'
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

export default function About() {
  return (
    <div className='container mx-auto max-w-6xl px-4 py-12'>
      <div className='flex flex-col gap-16'>
        {/* PERFIL */}
        <section className='flex flex-col items-center text-center'>
          <div className='overflow-hidden rounded-full border-border shadow-xl/35'>
            <Image
              width={300}
              height={300}
              src='/images/kapelu.png'
              alt='Daniel Calderón'
              className='h-auto w-auto object-cover'
              priority
            />
          </div>

          <h1 className='mt-6 bg-clip-text text-4xl font-bold text-secundary md:text-6xl'>
            Daniel Calderón
          </h1>

          <p className='mt-3 text-lg font-medium text-muted-foreground md:text-xl'>
            Desarrollador Full Stack
          </p>

          <div className='mt-4 flex flex-wrap justify-center gap-2'>
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB','Script Bash',].map(
              (tech) => (
                <span
                  key={tech}
                  className='rounded-full border px-3 py-1 text-sm'>
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        {/* DESCRIPCIÓN */}
        <section className='mx-auto max-w-4xl'>
          <div className='rounded-2xl border bg-card p-8 shadow-sm'>
            <h2 className='mb-6 text-2xl font-bold'>Mi historia</h2>

            <div className='space-y-5 text-base leading-8 text-muted-foreground md:text-lg'>
              <p>
                Soy un desarrollador web autodidacta. Durante los últimos años
                he dedicado gran parte de mi tiempo a aprender y mejorar mis
                habilidades en el desarrollo de aplicaciones modernas.
              </p>

              <p>
                Me considero una persona comprometida, curiosa y enfocada en el
                aprendizaje continuo. Aunque disfruto especialmente del
                desarrollo Frontend, también trabajo con Backend y bases de
                datos.
              </p>

              <p>
                Disfruto resolver problemas, crear experiencias de usuario
                intuitivas y enfrentar nuevos desafíos que me permitan crecer
                profesionalmente.
              </p>

              <p>
                Mi objetivo es formar parte de proyectos donde pueda aportar
                valor, seguir aprendiendo y colaborar con equipos que compartan
                la pasión por construir productos de calidad.
              </p>
            </div>
          </div>
        </section>

        {/* FRASE */}
        <section className='mx-auto w-full max-w-5xl'>
          <div className='overflow-hidden rounded-2xl shadow-lg'>
            <Image
              src='/images/frasePele.jpg'
              alt='Frase de Pelé'
              width={1200}
              height={800}
              sizes='100vw'
              className='w-full h-auto'
            />
          </div>
        </section>
      </div>
    </div>
  )
}
