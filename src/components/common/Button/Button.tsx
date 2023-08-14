import { styled } from "styled-components";

import { size } from "../../../sizeHelper";

type ButtonSize = 'S' | 'M';

const StyledButton = styled.button<{ size: ButtonSize; inversed: boolean; }>`
  line-height: 14px;
  width: fit-content;
  background: white;
  background: ${({inversed}) => inversed ? '#46B8C8' : 'white'};
  border: 1px solid #46B8C8;
  border-radius: 33px;
  color: ${({inversed}) => inversed ? 'white' : '#46B8C8'};
  font-family: 'circular';
  font-size: 18px;
  font-weight: 700;
  padding: ${({size}) => size === 'M' ? '15px 34px' : '14px 20px'};
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: ${({inversed}) => inversed ? '#509da8' : '#ebebeb'};
  }

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    padding: ${({size}) => size === 'M' ? '10px 25px' : '10px 16px'};
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    padding: ${({size}) => size === 'M' ? '8px 15px' : '8px 10px'};
  }
`;

export const Button = ({ text, size = 'M', inversed = false }: { text: string; size?: ButtonSize; inversed?: boolean}) => (
  <StyledButton size={size} inversed={inversed} onClick={() => console.log('Clicked')}>
    {text}
  </StyledButton>
);
