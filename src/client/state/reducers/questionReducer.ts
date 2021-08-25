import constants from '../constants';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_QUESTION: {
      return {
        ...state,
        question: payload,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
