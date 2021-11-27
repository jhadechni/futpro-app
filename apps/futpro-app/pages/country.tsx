import styled from 'styled-components';
import Countryf from '../country/country_f';
import { useRouter } from 'next/router';

const StyledCountry = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TitleCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
`; 
const CardContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`

export function Country() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <StyledCountry>
        <TitleCardContainer>
          {/* Card del pais  */}
        </TitleCardContainer>
        <CardContainer> 
          <Countryf country={id}/>
        </CardContainer>
      </StyledCountry>
    </>
    
  );
}

export default Country;