import styled from 'styled-components';
import { useEffect, useState } from 'react';
import  listAllTeams  from '../requests/listAllTeams';
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
`;

export function Country_f(country: any) {
    
  const [teamsData, setTeamsData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const products = await listAllTeams(country.country);
      setTeamsData(products);
    })();
  }, []);

    return(
    <>
    <StyledCountries>
        <TitleContainer>
          <TitleText>{country.country}</TitleText>
        </TitleContainer>
        <CardContainer>
          {teamsData.map((countrie) => {
            return (
              <Card
              key={cuid()}
              text={countrie.name}
              imagelink={countrie.img}
              id = {countrie.id}
              route = {'club'}
            />
          );
          })}
        </CardContainer>
      </StyledCountries>
      </>
    );
}
export default Country_f;