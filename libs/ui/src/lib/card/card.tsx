import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled.div`
  cursor: pointer;
  background-color: #1C5F33;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #00000034;
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
  max-width: 350px;
`;

const TextCard = styled.text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  color: #FFFFFF;
`;

export function Card(props: CardProps) {
  return (
    <StyledCard>
      <WrapImageCard>
        <FlagIcon src="https://media.api-football.com/flags/ar.svg" />
      </WrapImageCard>
      <TextCard>Carta</TextCard>
    </StyledCard>
  );
}

export default Card;
