import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {listAllCountries} from './request';
import cuid from 'cuid';
import {Header as Hdr, Footer as Ftr, Card, Nav} from '@futpro/ui';

const StyledCountries = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
`; 
const TitleText = styled.text`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  color: white;
`;
const CardContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`;
export function Countries() {

  const [countriesData, setCountriesData] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const countries = await listAllCountries();
      setCountriesData(countries);
    })();
  }, []);

  return (
    <>
      <StyledCountries>
        <TitleContainer>
          <TitleText>Países</TitleText>
        </TitleContainer>
        <CardContainer>
          {countriesData.map((countrie) => {
            return (
              <Card
              key={cuid()}
              text={countrie.name}
              imagelink={countrie.img}
              id = {countrie.name}
              route = {'country'}
            />
          );
          })}
        </CardContainer>
      </StyledCountries>
    </>
  );
}

export default Countries;