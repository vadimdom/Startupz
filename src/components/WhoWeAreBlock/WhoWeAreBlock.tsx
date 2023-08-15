import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption, Step } from '../common';
import { ReactComponent as Question } from './img/question.svg';

const WhoWeAreBlockContainer = styled.div`
  background: #FBFAFA;
  padding: 140px 120px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: ${size.laptop}) {
    gap: 50px;
    padding: 30px 80px 100px 80px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 30px;
    padding: 30px 20px 50px 20px;
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
  margin-bottom: 32px;

  @media (max-width: ${size.laptop}) {
    font-size: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: ${size.tablet}) {
    text-align: center;
    font-size: 28px;
    margin-bottom: 16px;
  }
`;

const SecondaryText = styled(Caption)`
  color: #FB8958;
  font-size: 24px;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
  }

  @media (max-width: ${size.tablet}) {
    text-align: center;
    font-size: 12px;
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

const QuestionIcon = styled(Question)`
  position: absolute;
  right: 0px;
  top: 0px;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

export const WhoWeAreBlock = () => (
  <WhoWeAreBlockContainer>
    <DescriptionContainer>
      <QuestionIcon />
      <Text>Who we are</Text>
      <SecondaryText>We create products that have innovation and technology at their core.</SecondaryText>
      <SecondaryText>We value working with talented people that understand the possibilities of today.</SecondaryText>
    </DescriptionContainer>
    <StepsContainer>
      <Step title="01" description="We develop innovative products, systems and services" />
      <Step title="02" description="Next we build teams to scale them into companies" />
      <Step title="03" description="Each startup solving one problem at a time" />
    </StepsContainer>
  </WhoWeAreBlockContainer>
);
