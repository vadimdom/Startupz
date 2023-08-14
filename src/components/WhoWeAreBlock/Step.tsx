import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption } from '../common';

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  @media (max-width: ${size.tablet}) {
    align-items: center;
  }
`;

const Title = styled(Caption)`
  color: #FB8958;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 19px;

  @media (max-width: ${size.laptop}) {
    font-size: 20px;
    margin-bottom: 6px;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 14px;
    text-align: center;
  }
`;

const Separator = styled.div`
  width: 50px;
  height: 1px;
  background: #3D4F5C;
  margin-bottom: 26px;

  @media (max-width: ${size.laptop}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${size.tablet}) {
    margin-bottom: 6px;
  }
`;

const Description = styled(Caption)`
  font-size: 30px;

  @media (max-width: ${size.laptop}) {
    font-size: 20px;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 14px;
    text-align: center;
    max-width: 200px;
  }
`;

export const Step = ({ title, description }: { title: string; description: string; }) => (
  <StepContainer>
    <Title>{title}</Title>
    <Separator />
    <Description>{description}</Description>
  </StepContainer>
);
