import { Html, Head, Main, NextScript } from 'next/document';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { AppConfig } from '../utils/AppConfig';

export default function Blog() {
  return (
    <Html lang={AppConfig.locale}>
      <Head />
      <body className="background container">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
