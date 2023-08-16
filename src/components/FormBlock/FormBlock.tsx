import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption } from '../common';
import rocketImage from './img/rocket.svg';

const FormBlockContainer = styled.div`
  position: relative;
  padding: 60px 124px 70px 124px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  background: #FFC351;

  @media (max-width: ${size.laptop}) {
    gap: 20px;
    padding: 30px 80px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 10px;
    padding: 30px 20px;
    align-items: center;
  }
`;

const RocketImage = styled.div`
  position: absolute;
  width: 660px;
  height: 538px;
  bottom: 0;
  right: 110px;
  background: url(${rocketImage});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${size.laptop}) {
    width: 300px;
    height: 245px;
    right: 70px;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const Text = styled(Caption)`
  color: white;
  font-size: 60px;
  font-weight: 700;
  line-height: 55px;
  max-width: 670px;

  @media (max-width: ${size.laptop}) {
    font-size: 32px;
    line-height: 32px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }
`;

const SecondaryText = styled(Caption)`
  color: white;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: ${size.laptop}) {
    font-size: 18px;
    line-height: 18px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const Form = styled.div`
  background: #F3F3F3;
  border-radius: 10px;
  padding: 72px 42px 40px 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
  width: 80%;
  max-width: 512px;
  z-index: 1;

  @media (max-width: ${size.laptop}) {
    padding: 30px;
    gap: 24px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 20px;
    gap: 16px;
  }
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (max-width: ${size.laptop}) {
    gap: 12px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 10px;
  }
`;

const Input = styled.input`
  font-family: 'circular';
  background: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  padding: 18px 16px;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    line-height: 14px;
    padding: 14px 12px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
    padding: 12px 10px;
  }
`;

const TextArea = styled.textarea`
  font-family: 'circular';
  height: 270px;
  background: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
  padding: 18px 16px;
  resize: none;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    line-height: 14px;
    padding: 14px 12px;
    height: 200px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
    padding: 12px 10px;
    height: 150px;
  }
`;

const Button = styled.button`
  line-height: 18px;
  width: fit-content;
  color: #FBFBFA;
  background: #3D4F5C;
  border: 1px solid #3D4F5C;
  border-radius: 33px;
  font-family: 'circular';
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s linear;
  padding: 14px 40px;

  &:hover {
    background: #2d3337;
  }

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    line-height: 14px;
    padding: 12px 20px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
    padding: 10px 16px;
  }
`;

export const FormBlock = () => (
  <FormBlockContainer>
    <Text>Are you ready to board this rocket ship?</Text>
    <SecondaryText>Share your excitement with us.</SecondaryText>
    <Form>
      <FormFields>
        <Input placeholder="Name*"/>
        <Input placeholder="Email*"/>
        <TextArea placeholder="Description*" aria-controls=''/>
      </FormFields>
      <Button onClick={() => console.log('Send')}>Shoot us a message</Button>
    </Form>
    <RocketImage />
  </FormBlockContainer>
);
