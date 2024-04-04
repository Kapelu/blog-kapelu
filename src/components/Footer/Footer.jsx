import Link from 'next/link'
import '@/components/Footer/Footer.css'
import {AppConfig} from '@/utils/AppConfig'

export default function Footer() {
	return (
		<footer className='footer'>
			Powered with{' '}
			<span role='img' aria-label='Love'>
				💛
			</span>{' '}
			by{' '}
			<Link
				href={AppConfig.url}
				target='_blank'
				rel='noopener noreferrer preload'
				as={AppConfig.url}
			>
				{AppConfig.author}
			</Link>
            <br />
			© Copyright {new Date().getFullYear()}.
		</footer>
	)
}

{
	/* <small>Todos los derechos reservados </small>
			<small className='link'>@KWS</small>
			<br />
			<small>
                className='link'
				Sitio diseñado y desarrollado por &nbsp;
				<Link
					href='https://github.com/keiko-tadashi'
					target='_blank'
					rel='noopener noreferrer preload'
				>
					@KWS
				</Link>
			</small> */
}
