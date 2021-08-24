import * as React from 'react';
import { globalCopy } from "../common/copy/uiCopy";
import { AppContainer } from './App.style';
import { Banner } from "./components/banner";
import { Navbar } from "./components/navbar";
import { QuestionDisplay } from './components/questionDisplay';

export const App = (): JSX.Element => {
  return (
    <AppContainer>
      <Navbar />
      <Banner>{globalCopy.banner}</Banner>
      <QuestionDisplay />
    </AppContainer>
  );
};
