import styled from 'styled-components';
import {CardTypes} from '@futpro/types'

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
  border-radius: 28px;
  border: 3px solid rgba(0, 0, 0, 1);
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


export function Card({imagelink, text}: CardTypes) {
  return (
    <StyledCard>
      <WrapImageCard>
        <FlagIcon src= {imagelink} />
      </WrapImageCard>
      <TextCard>{text}</TextCard>
    </StyledCard>
  );
}

export default Card;
