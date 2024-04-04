import Link from 'next/link'
import Image from 'next/image'
import {AppConfig} from '../utils/AppConfig'

export default function Home() {
	return (
		<section>
			<article className='text-center'>
				<h1 className='title'>{AppConfig.author}</h1>
				<br />

				<p className='text-inicio text-left'>{AppConfig.description}</p>
				<figure className='flex justify-center'>
					<Image
						className='foto-perfil'
						width='320'
						height='320'
						src='/kapelu.webp'
						alt='Daniel Calderon'
					/>
				</figure>
				<br />
				<br />
				<br />
				<p className='text-inicio text-left '>
					Soy un desarrollador web autodidacta, durante los ultimos 3
					años he dedicado gran parte de mi tiempo a adquirir
					habilidades y conocimientos en el campo del desarrollo web.
				</p>
				<p className='text-inicio text-left'>
					Estoy más orientado al Frontend, pero también hago Backend.
				</p>
				<p className='text-inicio text-left'>
					Me gusta enfrentar nuevos desafíos y encontrar soluciones
					creativas a los problemas que se presentan,soy persona
					dedicada y comprometida con mi trabajo, y estoy dispuesto a
					aprender y adquirir nuevos conocimientos para mejorar mis
					habilidades como programador.
				</p>
			</article>
			<article className='social-media-buttons-background'>
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
			</article>
		</section>
	)
}
