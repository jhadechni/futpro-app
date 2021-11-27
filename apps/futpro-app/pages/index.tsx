import styled from 'styled-components';
import Link from 'next/link';

const StyledPage = styled.div`
  .page {
  }
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
const Button = styled.button`
  font-family: lato,sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  padding: 10px 40px 10px 40px;
  position: relative;
  border: 3px solid #ffffff;
  border-radius: 20px;
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <>
      <TitleContainer>
        <TitleText>Bienvenido a Football pro app </TitleText>
      </TitleContainer>
      <Link href={{ pathname: `/countries`}}>
        <Button>Ver paises</Button>
      </Link>
    </>
  );
}

export default Index;
