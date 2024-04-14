import React from 'react';

import { AppProps } from 'next/app';

import '../styles/global.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/articles.css';
import '../styles/about.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
