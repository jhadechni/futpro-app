import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getCountries } from '../request';
import { Card } from '@futpro/ui';
import cuid from 'cuid';

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
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`

export function Countries() {

  const [countriesData, setCountriesData] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const products = await getCountries();
      setCountriesData(products);
    })();
  }, []);

  return (
    <StyledCountries>
      <TitleContainer>
        <TitleText>Países</TitleText>
      </TitleContainer>
      <CardContainer>
        {countriesData.map((item) => {
          return (
            <Card
              key={cuid()}
              text={item.name}
              link={item.img}
            />
          );
        })}
      </CardContainer>
    </StyledCountries>
  );
}

export default Countries;