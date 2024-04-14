import { AppConfig } from '../utils/AppConfig';

const Footer = () => {
  return (
    <footer className="footer">
      Powered with{' '}
      <span role="img" aria-label="Love">
        💛
      </span>{' '}
      by <a href="https://danielcalderon.vercel.app/">{AppConfig.title}.</a>
      <br />© Copyright {new Date().getFullYear()}
    </footer>
  );
};
export default Footer;
