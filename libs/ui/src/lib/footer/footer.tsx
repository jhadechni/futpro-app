import styled from 'styled-components';


/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.footer`
  //margin-top: -14px;
  //position: absolute;
  //left: 0%;
  //right: 0%;
  //top: 0%;
  //bottom: 9.71%;
  
  background-color: #2F9B54;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px -29px 17px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding-top: 1%;
  padding-bottom: 1%;
  z-index: 2;
`;

const TextFooter = styled.text`
  font-family: 'Outfit', sans-serif;
  font-style: normal;
  font-size: 20px;
  color: #FFFFFF;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <TextFooter>©Football Pro 2021 | All Rights Reserved.</TextFooter>
    </StyledFooter>
  );
}

export default Footer;
