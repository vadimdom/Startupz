import { styled } from 'styled-components';

import { size } from '../../sizeHelper';
import { ThumbUpBlock } from '../common';
import help from './img/help.jpg';
import { useState } from 'react';

const SolvingProblemsBlockContainer = styled.div`
  position: relative;
  padding: 140px 120px;
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

const HelpContainer = styled.div`
  position: absolute;
  right: 120px;
  top: 120px;
  border-radius: 50%;
  width: 98px;
  height: 98px;
  background: #FBFAFA;
  border: 8px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;

  @media (max-width: ${size.laptop}) {
    right: 40px;
    top: 25px;
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const HelpImage = styled.img`
  width: 64px;
  height: 58px;

  @media (max-width: ${size.laptop}) {
    width: 35px;
    height: 35px;
  }
`;

const DialogueContainer = styled.div`
  display: flex;
  gap: 70px;

  position: absolute;
  top: 56px;
  right: 130px;

  @media (max-width: ${size.laptop}) {
    right: 50px;
    top: -38px;
    gap: 50px;
  }

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`;

const DialogueText = styled.div`
  width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background: #46B8C8;
  border-radius: 40px;
  border-bottom-right-radius: 0px;
  display: flex;
  align-items: center;
  padding: 14px 18px;
`;

const CloseDialogueContainer = styled.div`
  cursor: pointer;
  color: #939393;
`;

const Dialogue = ({ onClose }: { onClose: () => void; }) => (
  <DialogueContainer>
    <DialogueText>Hi! I am Ben, your virtual assistant. How can I make your day better?</DialogueText>
    <CloseDialogueContainer onClick={onClose}>X</CloseDialogueContainer>
  </DialogueContainer>
);

export const SolvingProblemsBlock = () => {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);

  return (
    <SolvingProblemsBlockContainer>
      <ThumbUpBlock text="We love solving problems!" />
      <HelpContainer onClick={() => setIsDialogueOpen(!isDialogueOpen)}>
        <HelpImage src={help}/>
      </HelpContainer>
      {isDialogueOpen && <Dialogue onClose={() => setIsDialogueOpen(false)} />}
    </SolvingProblemsBlockContainer>
  );
};
