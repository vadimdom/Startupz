import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { Caption } from '../common';
import { ReactComponent as StartupzLogo } from '../img/startupz_logo.svg';
import { ReactComponent as Twitter } from './img/twitter.svg';
import { ReactComponent as Linkedin } from './img/linkedin.svg';
import { ReactComponent as Instagram } from './img/instagram.svg';

const FooterContainer = styled.div`
  padding: 100px 120px 120px 120px;
  background: #FBFBFA;
  display: grid;
  grid-template-columns: 25% 15% 25% 8%;
  grid-column-gap: 9%;

  @media (max-width: ${size.laptop}) {
    padding: 30px 40px;
    grid-template-columns: 20% 15% 25% 12%;
    grid-column-gap: 6%;
  }
  @media (max-width: ${size.tablet}) {
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    align-items: center;
  }
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${size.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: unset;
    gap: 15px;
    flex-wrap: wrap;
  }
`;

const Rigths = styled(Caption)`
  color: #939393;
  line-height: 30px;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    line-height: 14px;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
    width: 100%;
    text-align: center;
  }
`;

const ColumnTitle = styled(Caption)`
  line-height: 18px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: ${size.tablet}) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const Link = styled.a`
  font-size: 18px;
  font-weight: 400;
  color: #46B8C8;
  font-family: 'circular';
  line-height: 35px;
  width: fit-content;
  cursor: pointer;
  margin-top: 8px;

  @media (max-width: ${size.laptop}) {
    font-size: 14px;
    line-height: 14px;
  }
  @media (max-width: ${size.tablet}) {
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
  }
`;

const TwitterLogo = styled(Twitter)`
  cursor: pointer;
  margin-top: 15px;

  @media (max-width: ${size.tablet}) {
    margin-top: 0px;
  }
`;

const LinkedinLogo = styled(Linkedin)`
  cursor: pointer;
  margin-top: 15px;

  @media (max-width: ${size.tablet}) {
    margin-top: 0px;
  }
`;

const InstagramLogo = styled(Instagram)`
  cursor: pointer;
  margin-top: 15px;

  @media (max-width: ${size.tablet}) {
    margin-top: 0px;
  }
`;

const Startupz = styled(StartupzLogo)`
  @media (max-width: ${size.laptop}) {
    width: 100px;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <Column>
      <Startupz />
      <ColumnContent>
        <Rigths>© 2020 Startupz.</Rigths>
        <Rigths>All rights reserved.</Rigths>
      </ColumnContent>
    </Column>
    <Column>
      <ColumnTitle>Companies</ColumnTitle>
      <ColumnContent>
        <Link>Tolq</Link>
        <Link>LegalSite</Link>
        <Link>Codekeeper</Link>
        <Link>Feedback Labs</Link>
      </ColumnContent>
    </Column>
    <Column>
      <ColumnTitle>Contact</ColumnTitle>
      <ColumnContent>
        <Rigths>World Trade Center - The Hague</Rigths>
        <Rigths>Prinses Margrietplantsoen 33</Rigths>
        <Rigths>2595 AM The Hague The</Rigths>
        <Rigths>Netherlands</Rigths>
      </ColumnContent>
      <Link>Send us an email</Link>
    </Column>
    <Column>
      <ColumnTitle>Follow us</ColumnTitle>
      <ColumnContent>
        <TwitterLogo />
        <LinkedinLogo />
        <InstagramLogo />
      </ColumnContent>
    </Column>
  </FooterContainer>
);
