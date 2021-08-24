import * as React from 'react';
import { questionCopy } from '../../../common/copy/uiCopy';
import { Button } from '../button';
import {
  QuestionDisplayContainer,
  QuestionDisplayHeader,
} from './questionDisplay.style';

export const QuestionDisplay = (): JSX.Element => {
  return (
    <QuestionDisplayContainer>
      <QuestionDisplayHeader>{questionCopy.header}</QuestionDisplayHeader>

      <Button>{questionCopy.primaryButtonLabel}</Button>
    </QuestionDisplayContainer>
  );
};
