import { Header } from './Header';
import { WeCreateBlock } from './WeCreateBlock';
import { WhoWeAreBlock } from './WhoWeAreBlock/WhoWeAreBlock';
import { SolvingProblemsBlock } from './SolvingProblemsBlock';
import { OurValuesBlock } from './OurValuesBlock';
import { StartupDescriptionBlock } from './StartupDescriptionBlock';
import { OurWorksBlock } from './OurWorksBlock/OurWorksBlock';
import { Footer } from './Footer';

export const Landing = () => (
  <>
    <Header />
    <WeCreateBlock />
    <WhoWeAreBlock />
    <SolvingProblemsBlock />
    <OurValuesBlock />
    <OurWorksBlock />
    <StartupDescriptionBlock />
    <Footer />
  </>
);
