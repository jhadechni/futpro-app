import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { listAllCountries } from '../request';
import { Card } from '@futpro/ui';
import cuid from 'cuid';

const StyledClubs = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`

export function Club() {

  const [countriesData, setCountriesData] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const countries = await listAllCountries();
      setCountriesData(countries);
    })();
  }, []);

  return (
    <StyledClubs>
      <TitleCardContainer>
        {/* Card del club */}
      </TitleCardContainer>
      <CardContainer>
        {countriesData.map((countrie) => {
          return (
            
            <Card
              key={cuid()}
              text={countrie.name}
              link={countrie.img}
            />
          );
        })}
      </CardContainer>
    </StyledClubs>
  );
}

export default Club;