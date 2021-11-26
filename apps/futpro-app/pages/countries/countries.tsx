import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getCountries } from '../request';
import { Card } from '@futpro/ui';
import cuid from 'cuid';

const StyledCountries = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
      <h1>Países</h1>
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