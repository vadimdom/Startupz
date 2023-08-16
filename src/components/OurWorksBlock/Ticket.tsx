import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Button, Caption } from '../common';

const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 45px 100px 50px 100px;
  box-shadow: 0px 8px 35px 0px #BBA98E26;

  @media (max-width: ${size.laptop}) {
    gap: 20px;
    padding: 30px 50px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 10px;
    padding: 20px 30px;
    max-width: 400px;
  }
`;

const Title = styled(Caption)<{ color: string; }>`
  font-size: 32px;
  font-weight: 700;
  line-height: 30px;
  color: ${({ color }) => color};

  @media (max-width: ${size.laptop}) {
    font-size: 24px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 18px;
  }
`;

const Description = styled(Caption)`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 20px;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 12px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 380px;
  height: 250px;

  @media (max-width: ${size.mobileL}) {
    display: none;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  min-height: 120px;

  @media (max-width: ${size.laptop}) {
    gap: 20px;
  }

  @media (max-width: ${size.tablet}) {
    gap: 10px;
  }
`;

export const Ticket = ({ title, color, description, image }: { title: string; color: string; description: string; image: any }) => (
  <TicketContainer>
    <TextBlock>
      <Title color={color}>{title}</Title>
      <Description>{description}</Description>
    </TextBlock>
    <Image src={image} alt="Ticket" />
    <Button text="More" />
  </TicketContainer>
);
