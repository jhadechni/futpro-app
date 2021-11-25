import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Button as Bttn} from '@futpro/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to futpro-app!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to futpro-app!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <Bttn>Nojoda cule filo</Bttn> 
      </div>
    </>
  );
}

export default CustomApp;
