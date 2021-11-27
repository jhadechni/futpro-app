import { useRouter } from 'next/router';
import styled from 'styled-components';
import Club_f from '../club/club_f';

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
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  justify-content: center;
`;

export function Club() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Club_f team={id}/>
    </>
  );
}

export default Club;