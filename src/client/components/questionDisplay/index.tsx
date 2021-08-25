import * as React from 'react';
import { questionCopy } from '../../../common/copy/uiCopy';
import { getQuestion } from '../../state/actions/questionActions';
import {
  QuestionProvider,
  useQuestionDispatch,
  useQuestionState,
} from '../../state/context/QuestionContext';
import { Button } from '../button';
import { Question } from './question';
import {
  QuestionDisplayContainer,
  QuestionDisplayHeader,
} from './questionDisplay.style';
import { useAsync } from 'react-async';

export interface QuestionDisplayProps {
  children?: React.ReactNode;
  label?: string;
  onClick?(event: React.MouseEvent): void;
}

export const QuestionDisplay = (): JSX.Element => {
  const [isGettingQuestion, setIsGettingQuestion] = React.useState(false);
  // @ts-ignore
  const { question } = useQuestionState();
  const dispatch = useQuestionDispatch();

  const { isLoading } = useAsync({ promiseFn: getQuestion, dispatch });

  if (isLoading) return <>Loading...</>;

  const handlePrimaryButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsGettingQuestion(true);
  };

  return (
    <QuestionProvider>
      <QuestionDisplayContainer>
        {isGettingQuestion && <Question question={question}></Question>}

        {!isGettingQuestion && (
          <QuestionDisplayHeader>{questionCopy.header}</QuestionDisplayHeader>
        )}

        {!isGettingQuestion && (
          <Button onClick={handlePrimaryButtonClick} main primary>
            {questionCopy.primaryButtonLabel}
          </Button>
        )}
      </QuestionDisplayContainer>
    </QuestionProvider>
  );
};
