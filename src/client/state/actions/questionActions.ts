import services from '../../api/services';
import constants from '../constants';

const setQuestion = (payload) => {
  return {
    payload,
    type: constants.GET_QUESTION,
  };
};

const getQuestion = ({ dispatch }) => {
  //Get question
  return (
    services
      // @ts-ignore
      .getQuestion()
      .then((result) => {
        // dispatch(setQuestion(result.data));
        dispatch(setQuestion('What is your favourite food?'));
      })
      .catch(() => {
        dispatch(setQuestion(''));
      })
  );
};

export { getQuestion };
