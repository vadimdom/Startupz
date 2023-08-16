import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Button, Caption } from '../common';
import { ReactComponent as StartupzLogo } from '../img/startupz_logo.svg';

const HeaderContainer = styled.div`
  padding: 30px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${size.laptop}) {
    gap: 10px;
    flex-direction: column;
    padding: 30px 80px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 30px 20px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  transition: all 0.3s linear;

  @media (max-width: ${size.tablet}) {
    gap: 20px;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <StartupzLogo />
    <NavigationContainer>
      <Caption>Startups</Caption>
      <Caption>Contacts</Caption>
      <Button text="Work with us!" />
    </NavigationContainer>
  </HeaderContainer>
);
