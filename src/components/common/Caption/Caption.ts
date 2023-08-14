import { styled } from "styled-components";

import { size } from "../../../sizeHelper";

export const Caption = styled.span`
  font-size: 18px;
  font-weight: 400;
  font-family: 'circular';
  color: #3D4F5C;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
  }
`;
