import { Header } from './Header';
import { WeCreateBlock } from './WeCreateBlock';
import { WhoWeAreBlock } from './WhoWeAreBlock/WhoWeAreBlock';
import { SolvingProblemsBlock } from './SolvingProblemsBlock';

export const Landing = () => (
  <div>
    <Header />
    <WeCreateBlock />
    <WhoWeAreBlock />
    <SolvingProblemsBlock />
  </div>
);
