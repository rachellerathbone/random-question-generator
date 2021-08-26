import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import reducer from '../reducers/questionReducer';

const initialState = {
  question: '',
};

type StateT = typeof initialState;
type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

const QuestionStateContext = createContext<StateGetSetT | undefined>(undefined);
const QuestionDispatchContext = createContext<Dispatch<any> | undefined>(
  undefined
);

const useQuestionState = () => {
  const context = useContext(QuestionStateContext);

  if (!context) {
    throw Error('useQuestionState must be used inside QuestionProvider!');
  }

  return context;
};

const useQuestionDispatch = () => {
  const context = useContext(QuestionDispatchContext);
  if (!context) {
    throw Error('useQuestionDispatch must be used inside QuestionProvider!');
  }
  return context;
};

type QuestionContextProviderProps = {
  children: React.ReactNode;
};

function QuestionProvider({ children }: QuestionContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuestionStateContext.Provider value={state}>
      <QuestionDispatchContext.Provider value={dispatch}>
        {children}
      </QuestionDispatchContext.Provider>
    </QuestionStateContext.Provider>
  );
}

export { useQuestionState, useQuestionDispatch, QuestionProvider };
