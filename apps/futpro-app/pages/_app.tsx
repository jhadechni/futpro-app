import { AppProps } from 'next/app';
import './styles.css';
import Countries  from './countries';
import {Header as Hdr, Footer as Ftr, Nav} from '@futpro/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Hdr/>
      <div className="app">
        <div className="container">
          <div className="boxcontent">
          <Component {...pageProps} />
          </div>
        </div>
      </div>
      <Ftr/>
    </>
  );
}

export default CustomApp;
