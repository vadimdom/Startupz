import { styled } from 'styled-components';

import { size } from '../../../sizeHelper';
import { Caption } from '..';
import thumbUpImage from './img/thumbUp.svg';

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${size.laptop}) {
    gap: 20px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 16px;
  }
`;

const Text = styled(Caption)`
  color: #FB8958;
  font-size: 40px;
  font-weight: 700;
  padding-top: 10px;
  text-align: center;

  @media (max-width: ${size.laptop}) {
    font-size: 24px;
  }

  @media (max-width: ${size.tablet}) {
    text-align: center;
    font-size: 16px;
  }
`;

const ThumbUp = styled.div`
  min-width: 50px;
  height: 56px;
  background: url(${thumbUpImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ReflectedThumbUp = styled(ThumbUp)`
  transform: scale(-1, 1);
`;

export const ThumbUpBlock = ({ text }: { text: string; }) => (
  <DescriptionContainer>
    <ThumbUp />
    <Text>{text}</Text>
    <ReflectedThumbUp />
  </DescriptionContainer>
);
