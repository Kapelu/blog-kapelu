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
    <div className='flex flex-col items-center space-y-12 px-4 py-10'>
      {/* PERFIL */}
      <section className='flex flex-col items-center text-center max-w-4xl'>
        <Image
          className='rounded-full object-cover'
          width={320}
          height={320}
          src='/images/kapelu.webp'
          alt='Daniel Calderón'
        />

        <h1 className='mt-4 text-4xl font-bold bg-linear-to-r from-[#d9c86c] via-[#c084fc] to-[#a34ce6] bg-clip-text text-transparent md:text-6xl'>
          Daniel Calderón
        </h1>

        <h4 className='mt-2 text-lg font-semibold md:text-xl'>
          Desarrollador Full Stack
        </h4>
      </section>

      {/* DESCRIPCIÓN */}
      <section className='max-w-4xl text-left leading-relaxed text-base md:text-lg md:px-24'>
        <p>
          Soy un desarrollador <i>web</i> autodidacta, durante los últimos 3
          años he dedicado gran parte de mi tiempo a adquirir habilidades y
          conocimientos en el campo del desarrollo <i>web</i>.
          <br />
          <br />
          Una persona dedicada y comprometida con mi trabajo, y estoy dispuesto
          a aprender y adquirir nuevos conocimientos para mejorar mis
          habilidades como programador. Estoy más orientado al <i>Frontend</i>,
          pero también hago <i>Backend</i>.
          <br />
          <br />
          Me gusta enfrentar nuevos desafíos y encontrar soluciones creativas a
          los problemas que se presentan.
          <br />
          <br />
          Estoy emocionado de tener la oportunidad de unirme a un equipo y
          contribuir al crecimiento de una empresa. Creo que esta va a ser una
          oportunidad ideal para seguir creciendo y aprendiendo, y estoy
          dispuesto a trabajar arduamente para alcanzar los objetivos de la
          empresa.
        </p>
      </section>

      {/* FRASE */}
      <section className='flex flex-col items-center max-w-5xl'>
        <Image
          className='rounded-xl object-cover w-full'
          width={750}
          height={650}
          src='/images/frasePele.jpg'
          alt='Frase de Pelé'
        />
      </section>
    </div>
  )
}

