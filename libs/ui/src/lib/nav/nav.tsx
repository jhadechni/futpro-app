import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavProps {}

const StyledNav = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    position: -webkit-sticky;
    padding: 10px 5px 10px 5px;
    max-height: 100vh;
  }
`;

const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 0px 10px 0px;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 5px 0px 5px 0px;
  &:hover{
    transition: color 100ms ease-out;
    border-radius: 30px;
    background: #00000034;
  }
`;

const Title = styled.text`
  font-size: 20px;
  padding: 20px;
  color: white;
  &:hover{
    transition: color 100ms ease-out;
  }
`;

export function Nav(props: NavProps) {
  return (
    <StyledNav>
      <StyledNavItem>
        <TitleContainer> 
          <Title>Home</Title>
        </TitleContainer>
      </StyledNavItem>
      <StyledNavItem>
        <TitleContainer>
          <Title>Paises</Title>
        </TitleContainer>
      </StyledNavItem>
      <StyledNavItem>
        <TitleContainer>
          <Title>Ligas</Title>
        </TitleContainer>
      </StyledNavItem>
      <StyledNavItem>
        <TitleContainer>
          <Title>About</Title>
        </TitleContainer>
      </StyledNavItem>
    </StyledNav>
  );
}

export default Nav;
