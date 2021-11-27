import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { listAllPlayers, listAllTeams } from '../pages/request';
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

export function Club_f(team: any) {
    
  const [clubData, setClubData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const products = await listAllPlayers(team.team);
      setClubData(products);
    })();
  }, []);

    return(
    <>
    <StyledCountries>
        <TitleContainer>
          <TitleText>Jugadores</TitleText>
        </TitleContainer>
        <CardContainer>
          {clubData.map((player) => {
              return (
                <Card
                key={cuid()}
                text={player.name}
                imagelink={player.img}
                id = {player.id}
                route = {''}
              />
              );
          })}
        </CardContainer>
      </StyledCountries>
      </>
    );
}
export default Club_f;