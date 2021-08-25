import * as React from 'react';
import { Button } from '../button';
import {
  QuestionButtonsContainer,
  QuestionContainer,
  QuestionDisplayHeader,
} from './questionDisplay.style';

const QuestionButtons = (): JSX.Element => {
  return (
    <QuestionButtonsContainer>
      <Button primary>Prev</Button>
      <Button>Select</Button>
      <Button primary>Next</Button>
    </QuestionButtonsContainer>
  );
};

interface QuestionProps {
  question: string;
}

export const Question = (props: QuestionProps): JSX.Element => {
  return (
    <QuestionContainer>
      <QuestionDisplayHeader>{props.question}</QuestionDisplayHeader>
      <QuestionButtons />
    </QuestionContainer>
  );
};
