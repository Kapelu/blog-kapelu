// eslint-disable-next-line prettier/prettier
import Image from "next/image";
// eslint-disable-next-line prettier/prettier
import Link from "next/link";

const Header = () => {
  return (
    <header className="header container">
      <article className="logo">
        <Image
          src="/assets/images/logo.png"
          className="img"
          alt="logo"
          width={42}
          height={42}
          priority={true}
        />
      </article>
      <article className="inicio">
        <Link href="/">Inicio</Link>
      </article>
      <article className="acerca">
        <Link href="/about">Acerca</Link>
      </article>
    </header>
  );
};

export default Header;
