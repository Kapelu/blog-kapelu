import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link  from 'next/link'
import Image from 'next/image'
import '@/style/about.css'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
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
      <section className="bg-background about full-lg-screen section-2-1">
        <article className="about-image">
          <Image
            className="foto-perfil flex justify-center"
            width="320"
            height="320"
            src="/kapelu.webp"
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
        </article>
{/*         <article className="abuot-social-media">
          <div className="social-media-buttons">
            <button className="social-media-button">
              <Link
                href="https://danielcalderon.vercel.app/"
                className="social-media-button"
                target="_blank"
                rel="noopener noreferrer preload"
              >
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="white"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.215 8.787h2.154c.601 0 1.088.487 1.088 1.088v4.954c0 .6-.487 1.088-1.088 1.088H6.05V9.475a.159.159 0 00-.066-.129zM12 23.099a11.078 11.078 0 01-8.659-4.155.046.046 0 01.036-.074h5.936a.26.26 0 00.153-.05l2.27-1.648a.159.159 0 00.064-.128V7.616a.159.159 0 00-.065-.129L9.466 5.84a.261.261 0 00-.153-.05H2.886a.046.046 0 01-.037-.071A11.087 11.087 0 0112 .9c3.798 0 7.15 1.907 9.151 4.817a.046.046 0 01-.038.071h-1.597c-.052 0-.1.03-.123.079l-.353.757-1.082-.786a.26.26 0 00-.153-.05h-2.553a.261.261 0 00-.154.05L12.83 7.487a.159.159 0 00-.065.129v9.428c0 .05.024.098.065.128l2.27 1.648a.26.26 0 00.153.05h5.371c.038 0 .06.045.036.074A11.078 11.078 0 0112 23.1zM1.602 8.3l1.038.755c.043.03.068.08.068.132v8.73c0 .046-.06.063-.084.025A11.046 11.046 0 01.901 12c0-1.289.22-2.526.624-3.677a.05.05 0 01.077-.024zm13.67.488h3.225v1.776c0 .046.038.084.084.084h2.701a.098.098 0 00.096-.083l.535-3.374c.007-.044.066-.053.086-.013a11.053 11.053 0 011.1 4.823 11.05 11.05 0 01-1.39 5.382c-.022.04-.084.024-.084-.023v-3.084a.084.084 0 00-.084-.084h-2.96a.084.084 0 00-.084.084v1.642h-1.301a1.089 1.089 0 01-1.089-1.088V9.475a.159.159 0 00-.065-.129zM12 0C5.373 0 0 5.373 0Z" />
                </svg>
              </Link>
            </button>
            <button className="social-media-button">
              <Link
                href="https://www.linkedin.com/in/ddanielcalderon/"
                className="social-media-button"
                target="_blank"
                rel="noopener noreferrer preload"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 25 25"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </button>
            <button className="social-media-button">
              <Link
                className="social-media-button"
                href="https://github.com/Kapelu"
                target="_blank"
                rel="noopener noreferrer preload"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 25 25"
                >
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </button>
            <button className="social-media-button">
              <Link
                href="https://wa.me/542615370075?text=Hola%20Daniel❗%20😊"
                className="social-media-button"
                target="_blank"
                rel="noopener noreferrer preload"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </article> */}
      </section>
    </div>
  )
}
