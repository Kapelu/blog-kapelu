'use client'
import React, { useState, useEffect } from "react";
import "@/style/Header.css";
import Link from "next/link";
import Image from "next/image";
import LogoKapelu from "../../public/logo.png";
import ThemeSwitch from "./ThemeSwitch";

interface MenuItem {
  name: string;
  link: string;
}

interface MenuItems {
  [key: string]: MenuItem;
}

const item: MenuItems = {
  inicio: {
    name: 'Inicio',
    link: '/',
  },
  acerca: {
    name: 'Acerca',
    link: '/acerca',
  }
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const changeMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.matches(".menu-item")) return;
      const btnMenu = document.querySelector<HTMLElement>(".menu-btn");
      if (btnMenu) {
        btnMenu.firstElementChild!.classList.remove("none");
        btnMenu.lastElementChild!.classList.add("none");
      }
      setIsMenuOpen(false);
    };
    document.addEventListener("click", changeMenu);

    return () => {
      document.removeEventListener("click", changeMenu);
    };
  }, []);

  return (
    <header className="header">
      <section className="container">
        <div className="logo">
          <Link
            href="https://github.com/Kapelu"
            target="_blank"
            rel="noopener noreferrer preload"
            passHref
          >
            <Image
              src={LogoKapelu}
              className="img"
              alt="logo"
              width={32}
              height={32}
              priority={true}
            />
          </Link>
        </div>
        <button
          className={`menu-btn`}
          onClick={() => {
            const btnMenu = document.querySelector<HTMLElement>('.menu-btn')

            setIsMenuOpen(!isMenuOpen)

            if (btnMenu) {
              btnMenu.firstElementChild!.classList.toggle('none')
              btnMenu.lastElementChild!.classList.toggle('none')
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>

          <svg
            className="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
          </svg>
        </button>
        <nav className={`menu ${isMenuOpen ? 'is-active' : ''}`}>
          {Object.keys(item).map((key) => (
            <Link href={item[key].link} key={key} passHref>
              <span className="menu-item">{item[key].name}</span>
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </section>
    </header>
  )
};

export default Header;
