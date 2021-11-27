import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  //margin-top: -14px;
  //position: absolute;
  //left: 0%;
  //right: 0%;
  //top: 0%;
  //bottom: 9.71%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #2F9B54;
  box-shadow: 0px 30px 17px rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 24px;
  //border-bottom-left-radius: 24px;
  padding-top: 1%;
  padding-bottom: 1%;
  z-index: 2;
`;

const TextHeader = styled.text`
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #1C5C32;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <TextHeader>Football Pro</TextHeader>
    </StyledHeader>
  );
}

export default Header;
