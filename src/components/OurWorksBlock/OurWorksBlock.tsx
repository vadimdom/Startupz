import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption } from '../common';
import { Ticket } from './Ticket';
import tolq from './img/tolq.jpg';
import feedback from './img/feedback.jpg';
import codekeeper from './img/codekeeper.jpg';
import legalsite from './img/legalsite.jpg';

const OurWorksBlockContainer = styled.div`
  position: relative;
  padding: 140px 120px 30px 120px;
  display: flex;
  gap: 55px;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${size.laptop}) {
    gap: 30px;
    padding: 30px 40px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 30px 20px;
  }
`;

const Text = styled(Caption)`
  font-size: 50px;
  font-weight: 700;

  @media (max-width: ${size.laptop}) {
    font-size: 32px;
  }

  @media (max-width: ${size.tablet}) {
    font-size: 18px;
  }
`;

const TicketsContainer = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
  grid-row-gap: 25px;

  @media (max-width: ${size.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const OurWorksBlock = () => (
  <OurWorksBlockContainer>
    <Text>Our works</Text>
    <TicketsContainer>
      <Ticket
        title="Tolq"
        description="Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution."
        image={tolq}
        color="#A9BC87"
      />
      <Ticket
        title="Feedback Labs"
        description="Feedback Labs turns feedback into actionable insights for your team."
        image={feedback}
        color="#8BB5C9"
      />
      <Ticket
        title="Codekeeper"
        description="Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements."
        image={codekeeper}
        color="#00A0B6"
      />
      <Ticket
        title="LegalSite"
        description="Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments."
        image={legalsite}
        color="#8B60D3"
      />
    </TicketsContainer>
  </OurWorksBlockContainer>
);
