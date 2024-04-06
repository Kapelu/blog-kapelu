import Link from 'next/link'
import Image from 'next/image'

import './page.css'
import {AppConfig} from '../utils/AppConfig'

export default function Home() {
	const stylesHeroImage = {
		backgroundImage: 'url(/bg-home.webp)',
		backgroundAttachment: 'fixed',
	}
	const stylesHeroImageOpacity = {
		backgroundColor: 'var(--backgroung-color-opacity)',
	}

	return (
		<section>
			<article className='hero-image' style={stylesHeroImage}>
				<aside
					className='hero-image-opacity'
					style={stylesHeroImageOpacity}
				>
					<div className='container'>
						<h1 className='home-title'>{AppConfig.author}</h1>
						<br />
						<div className='section'>
							<p className='hero-image-text'>
								{AppConfig.description}
							</p>
							<figure className='flex justify-center'>
								<Image
									className='foto-perfil'
									width='320'
									height='320'
									src='/kapelu.webp'
									alt='Daniel Calderon'
								/>
							</figure>
							<aside className='social-media-buttons-background'>
								<span className='social-media-buttons'>
									<Link
										href='https://danielcalderon.vercel.app/'
										className='social-media-button'
										target='_blank'
										rel='noopener noreferrer preload'
									>
										<Image
											width='320'
											height='320'
											alt='Portfolio - Daniel Calderon'
											src='assets/cv-cd.svg'
										/>
									</Link>
									<Link
										href='https://www.linkedin.com/in/ddanielcalderon/'
										className='social-media-button'
										target='_blank'
										rel='noopener noreferrer preload'
									>
										<Image
											width='320'
											height='320'
											alt='LinkedIn - Daniel Calderon'
											src='assets/linkedin.svg'
										/>
									</Link>
									<Link
										href='https://github.com/Kapelu'
										className='social-media-button'
										target='_blank'
										rel='noopener noreferrer preload'
									>
										<Image
											width='320'
											height='320'
											alt='Github - kapelu'
											src='assets/github.svg'
										/>
									</Link>
									<Link
										href='https://wa.me/542615370075?text=Hola%20Daniel❗%20😊'
										className='social-media-button'
										target='_blank'
										rel='noopener noreferrer preload'
									>
										<Image
											width='320'
											height='320'
											alt='Whatsapp - Daniel Calderon'
											src='assets/whatsapp.svg'
										/>
									</Link>
								</span>
							</aside>
							<p className='hero-image-text '>
								Soy un desarrollador web autodidacta, durante
								los ultimos 3 años he dedicado gran parte de mi
								tiempo a adquirir habilidades y conocimientos en
								el campo del desarrollo web.
							</p>
							<p className='hero-image-text'>
								Estoy más orientado al Frontend, pero también
								hago Backend.
							</p>
							<p className='hero-image-text'>
								Me gusta enfrentar nuevos desafíos y encontrar
								soluciones creativas a los problemas que se
								presentan,soy persona dedicada y comprometida
								con mi trabajo, y estoy dispuesto a aprender y
								adquirir nuevos conocimientos para mejorar mis
								habilidades como programador.
							</p>
						</div>
					</div>
				</aside>
			</article>
		</section>
	)
}
