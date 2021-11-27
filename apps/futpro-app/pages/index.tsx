import styled from 'styled-components';
import Link from 'next/link';

const StyledPage = styled.div`
  .page {
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex: wrap;
  flex-direction: column;
  padding: 2%;
  height: 70vh;
`; 
const TitleText = styled.text`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 64px;
  color: white;
  text-align: center;
`;
const Button = styled.button`
  margin-top: 100px;
  font-family: lato,sans-serif;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-decoration: none;
  color: black;
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
        <Link href={{ pathname: `/countries`}}>
          <Button>Ver paises</Button>
        </Link>
      </TitleContainer>
    </>
  );
}

export default Index;
