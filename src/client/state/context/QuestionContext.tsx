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

// import * as React from 'react';

// // Defines the structure of global context store, and default values.
// // If you're using a non-built-in type, use "as" to declare the type.
// // This structure is the *ONLY THING* you need to customize in this file,
// // everything else will adapt accordingly.

// const initialState = {
//   question: '',
// };

// // Global app context.
// type StateT = typeof initialState;
// type StateGetSetT = [StateT, React.Dispatch<React.SetStateAction<StateT>>];

// const QuestionContext = React.createContext<StateGetSetT | undefined>(
//   undefined
// );

// // Context provider, should wrap entire application.
// type QuestionContextProviderProps = {
//   children: React.ReactNode;
// };

// function QuestionContextProvider({ children }: QuestionContextProviderProps) {
//   const contextGetSet = React.useState(initialState);
//   return (
//     <QuestionContext.Provider value={contextGetSet}>
//       {children}
//     </QuestionContext.Provider>
//   );
// }

// // Custom hook to retrieve and set context state.
// type SetPartialStateT = (newVals: Partial<StateT>) => void;
// type UseQuestionContextT = [StateT, SetPartialStateT];

// function useQuestionContext(): UseQuestionContextT {
//   const [state, setState] = React.useContext(QuestionContext) as StateGetSetT;
//   function setPartialState(newVals: Partial<StateT>) {
//     setState({ ...state, ...newVals });
//   }

//   return [state, setPartialState];
// }

// export { QuestionContextProvider, useQuestionContext };
