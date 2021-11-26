import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0000006c;
  }
  padding: 1%;
`;

const WrapImageCard = styled.div`
  border-radius: 24px;
  
`;

const FlagIcon = styled.img`
  border-radius: 24px;
  display: block;
  object-fit: cover;
  transition: all 0.2s linear;
  max-width: 200px;
`;

const TextCard = styled.text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  color: #FFFFFF;
`;

type Approps ={
  link : string;
  text : string;
};

export function Card({link, text}: Approps) {
  return (
    <StyledCard>
      <WrapImageCard>
        <FlagIcon src= {link} />
      </WrapImageCard>
      <TextCard>{text}</TextCard>
    </StyledCard>
  );
}

export default Card;
