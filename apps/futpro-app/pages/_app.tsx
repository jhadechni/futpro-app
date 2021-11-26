import { AppProps } from 'next/app';
import './styles.css';
import {Header as Hdr, Footer as Ftr, Card, Nav} from '@futpro/ui';
import axios  from 'axios';
import { useEffect, useState } from "react"
import Countries  from './countries/countries';
import styled from 'styled-components';

const Card_list = styled.ul`
  display: block;
	margin: 1rem auto;
	padding: 0;
	font-size: 0;
	text-align: center;
	list-style: none;
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Hdr/>
      <div className="app">
        <div className="container">
          <div className="box">
           <Nav/>          
           </div>
          <div className="boxcontent">
            <Countries />
          </div>
        </div>
      </div>
      <Ftr/>
    </>
  );
}

export default CustomApp;
