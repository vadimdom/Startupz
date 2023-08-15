import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption, Step } from '../common';
import bulb from './img/bulb.jpg';

const OurValuesBlockContainer = styled.div`
  background: #FBFAFA;
  padding: 170px 120px 190px 120px;
  display: flex;
  flex-direction: column;
  gap: 118px;

  @media (max-width: ${size.laptop}) {
    gap: 80px;
    padding: 80px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 30px;
    padding: 30px 20px;
    align-items: center;
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Text = styled(Caption)`
  font-size: 50px;
  font-weight: 700;

  @media (max-width: ${size.laptop}) {
    font-size: 50px;
  }

  @media (max-width: ${size.tablet}) {
    text-align: center;
    font-size: 28px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${size.tablet}) {
    flex-wrap: unset;
    flex-direction: column;
  }
`;

const BulbIcon = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const FirstStep = styled(Step)`
  max-width: 60%;

  @media (max-width: ${size.laptop}) {
    max-width: 300px;
  }
`;

export const OurValuesBlock = () => (
  <OurValuesBlockContainer>
    <DescriptionContainer>
      <BulbIcon src={bulb} />
      <Text>Our core values</Text>
    </DescriptionContainer>
    <StepsContainer>
      <FirstStep title="01. Innovation" description="Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models." />
      <Step title="02. People" description="Talent is what enable us to create great companies." />
    </StepsContainer>
  </OurValuesBlockContainer>
);
