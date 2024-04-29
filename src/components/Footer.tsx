'use client'
import { AppConfig } from '@/lib/AppConfig'
import Link from 'next/link'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-bottom: var(--header-height);
  padding: 0.5rem;
  text-align: center;
  color: #0979b0;
  background-color: #66666641;
  font-style: italic;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <section>
        Powered with{' '}
        <span role="img" aria-label="Love">
          💛
        </span>{' '}
        by{' '}
        <Link
          href="https://danielcalderon.vercel.app/"
          className="link"
          target="_blank"
          rel="noopener noreferrer preload"
          as="https://danielcalderon.vercel.app/"
        >
          {AppConfig.title}
        </Link>
        <br />© Copyright {new Date().getFullYear()}
      </section>
    </StyledFooter>
  )
}

export default Footer
