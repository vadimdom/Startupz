import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Button, Caption } from '../common';
import rightImage from './img/right.svg';
import leftImage from './img/left.svg';

const WeAreHiringBlockContainer = styled.div`
  position: relative;
  padding: 140px 0px 165px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #FBFBFA;
  align-items: center;

  @media (max-width: ${size.laptop}) {
    gap: 20px;
    padding: 30px 0px;
    background-size: 30%;
  }

  @media (max-width: ${size.tablet}) {
    gap: 10px;
    padding: 30px 0px;
    background-size: 30%;
  }
`;

const Text = styled(Caption)`
  font-size: 50px;
  line-height: 50px;
  font-weight: 700;
`;

const SecondaryText = styled(Caption)`
  font-size: 24px;
  line-height: 30px;
  color: #FB8958;
  max-width: 55%;
  text-align: center;
`;

const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightImage = styled.div`
  position: absolute;
  width: 290px;
  height: 320px;
  right: 0;
  background: url(${rightImage});
`;

const LeftImage = styled.div`
  position: absolute;
  width: 290px;
  height: 320px;
  left: 0;
  background: url(${leftImage});
`;

export const WeAreHiringBlock = () => (
  <WeAreHiringBlockContainer>
    <LeftImage />
    <RightImage />
    <Text>We are hiring!</Text>
    <SecondaryContainer>
      <SecondaryText>We're always looking for talented people to join and help build our startups.</SecondaryText>
      <SecondaryText>Check out our current openings</SecondaryText>
    </SecondaryContainer>
    <Button text="See current openings" inversed size='S'  />
  </WeAreHiringBlockContainer>
);
