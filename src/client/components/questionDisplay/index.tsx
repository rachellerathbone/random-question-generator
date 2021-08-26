import * as React from 'react';
import { questionCopy } from '../../../common/copy/uiCopy';
import { QuestionProvider } from '../../state/context/QuestionContext';
import { Button } from '../button';
import { Question } from './question';
import {
  QuestionDisplayContainer,
  QuestionDisplayHeader,
} from './questionDisplay.style';

export interface QuestionDisplayProps {
  children?: React.ReactNode;
  label?: string;
  onClick?(event: React.MouseEvent): void;
}

export const QuestionDisplay = (): JSX.Element => {
  const [isGettingQuestion, setIsGettingQuestion] = React.useState(false);

 

  const handlePrimaryButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsGettingQuestion(true);
  };

  return (
    <QuestionProvider>
      <QuestionDisplayContainer>
        {isGettingQuestion && <Question></Question>}

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
