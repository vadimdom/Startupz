import { Header } from './Header';
import { WeCreateBlock } from './WeCreateBlock';
import { WhoWeAreBlock } from './WhoWeAreBlock/WhoWeAreBlock';
import { SolvingProblemsBlock } from './SolvingProblemsBlock';
import { OurValuesBlock } from './OurValuesBlock';

export const Landing = () => (
  <div>
    <Header />
    <WeCreateBlock />
    <WhoWeAreBlock />
    <SolvingProblemsBlock />
    <OurValuesBlock />
  </div>
);
