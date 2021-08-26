import services from '../../api/services';
import constants from '../constants';

const setQuestion = (payload: string) => {
  return {
    payload,
    type: constants.GET_QUESTION,
  };
};

const getQuestion = ({ dispatch }) => {
  // Get question
  return (
    services
      // @ts-ignore
      .getQuestion()
      .then((result) => {
        console.log(result);
        dispatch(setQuestion(result.data));
      })
      .catch((e) => {
        dispatch(setQuestion(''));
      })
  );
};

export { getQuestion };
