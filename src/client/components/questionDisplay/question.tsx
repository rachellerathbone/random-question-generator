import * as React from 'react';
import {
  useQuestionDispatch,
  useQuestionState,
} from '../../state/context/QuestionContext';
import { Button } from '../button';
import {
  QuestionButtonsContainer,
  QuestionContainer,
  QuestionDisplayHeader,
} from './questionDisplay.style';
import { useAsync } from 'react-async';
import { getQuestion } from '../../state/actions/questionActions';

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
  // @ts-ignore
  const { question } = useQuestionState();
  const dispatch = useQuestionDispatch();
  const { isLoading } = useAsync({ promiseFn: getQuestion, dispatch });

  return (
    <QuestionContainer>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <QuestionDisplayHeader>{question}</QuestionDisplayHeader>
          <QuestionButtons />
        </>
      )}
    </QuestionContainer>
  );
};
