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

export const Question = (): JSX.Element => {
  return (
    <QuestionContainer>
      <QuestionDisplayHeader>
        What is your favorite color?
      </QuestionDisplayHeader>
      <QuestionButtons />
    </QuestionContainer>
  );
};
