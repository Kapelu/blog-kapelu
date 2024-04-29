import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import '@/style/about.css'

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
    <div className=" space-y-7">
      <section className="about full-lg-screen section-2-1 bg-background">
        <article className="about-image">
          <Image
            className="foto-perfil flex justify-center"
            width={320}
            height={320}
            src="/images/kapelu.webp"
            alt="Daniel Calderon"
          />
          <h1>Daniel Calderón</h1>
          <h4>Desarrollador Full Stack</h4>

          <br />
          <br />
        </article>
        <article className="about-description">
          <p className="text-lg-left text-left">
            Soy un desarrollador <i>web</i> autodidacta, durante los ultimos 3
            años he dedicado gran parte de mi tiempo a adquirir habilidades y
            conocimientos en el campo del desarrollo <i>web</i>.
            <br />
            <br />
            Una persona dedicada y comprometida con mi trabajo, y estoy
            dispuesto a aprender y adquirir nuevos conocimientos para mejorar
            mis habilidades como programador. Estoy más orientado al{' '}
            <i>Frontend</i>, pero también hago <i>Backend</i>.
            <br />
            <br />
            Me gusta enfrentar nuevos desafíos y encontrar soluciones creativas
            a los problemas que se presentan.
            <br />
            <br />
            Estoy emocionado de tener la oportunidad de unirme a un equipo y
            contribuir al crecimiento de una empresa. Creo que esta va a ser una
            oportunidad ideal para seguir creciendo y aprendiendo, y estoy
            dispuesto a trabajar arduamente para alcanzar los objetivos de la
            empresa.
          </p>
        </article>{' '}
        <br /><br />
        <article className="about-image">
          <Image
            className="foto-perfil flex justify-center"
            width={750}
            height= {650}
            src="/images/frasePele.jpg"
            alt="Frase-de-Pelé"
          />
          <br />
          <br />
        </article>
      </section>
    </div>
  )
}
