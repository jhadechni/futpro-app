import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Header as Hdr, Footer as Ftr, Card, Nav} from '@futpro/ui';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Hdr/>
      <div className="app">
        <div className="container">
          <div className="box">
            <Nav />
          </div>
          <div className="boxcontent">
            <div className="card-container">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
      <Ftr/>
    </>
  );
}

export default CustomApp;
