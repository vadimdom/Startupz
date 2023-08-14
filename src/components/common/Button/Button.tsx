import { styled } from "styled-components";

import { size } from "../../../sizeHelper";

const StyledButton = styled.button`
  line-height: 14px;
  background: white;
  border: 1px solid #46B8C8;
  border-radius: 33px;
  color: #46B8C8;
  font-family: 'circular';
  font-size: 18px;
  font-weight: 700;
  padding: 15px 34px;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #ebebeb;
  }

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    padding: 10px 25px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    padding: 8px 15px;
  }
`;

export const Button = ({ text }: { text: string }) => (
  <StyledButton onClick={() => console.log('Clicked')}>
    {text}
  </StyledButton>
);
