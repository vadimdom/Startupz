import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Button, Caption } from '../common';
import backImage from './img/back.svg';


const WeCreateBlockContainer = styled.div`
  padding: 30px 0px 225px 120px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: url(${backImage});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 100% 100%;

  @media (max-width: ${size.laptop}) {
    gap: 10px;
    padding: 30px 80px 100px 80px;
    background-size: 30%;
  }

  @media (max-width: ${size.tablet}) {
    padding: 30px 20px 50px 20px;
    align-items: center;
    background-size: 30%;
  }
`;

const Text = styled(Caption)`
  font-size: 85px;
  font-weight: 700;
  max-width: 430px;

  @media (max-width: ${size.laptop}) {
    font-size: 50px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 28px;
    max-width: unset;
  }
`;

const SecondaryText = styled(Caption)`
  color: #FB8958;

  @media (max-width: ${size.tablet}) {
    text-align: center;
  }
`;

export const WeCreateBlock = () => (
  <WeCreateBlockContainer>
    <Text>We Create Startups.</Text>
    <SecondaryText>We are startup studio that develops and launches new companies.</SecondaryText>
    <Button text="See our works" inversed size='S'  />
  </WeCreateBlockContainer>
);
