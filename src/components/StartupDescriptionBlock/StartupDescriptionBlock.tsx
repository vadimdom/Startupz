import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { ThumbUpBlock } from '../common';

const StartupDescriptionBlockContainer = styled.div`
  position: relative;
  padding: 140px 180px 180px 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${size.laptop}) {
    padding: 30px 80px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 30px 20px;
  }
`;

export const StartupDescriptionBlock = () => (
  <StartupDescriptionBlockContainer>
    <ThumbUpBlock text="Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity." />
  </StartupDescriptionBlockContainer>
);
