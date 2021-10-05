import * as API from "../utils/api";
import { addUserQuestion, saveUserAnswer, getUsers } from "./users";
import { addQuestion, saveAnswer, getQuestions } from "./questions";

export function handleData() {
  return dispatch => {
    return API.getData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

export function handleQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return API.saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then(question => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authedUser, question.id));
    });
  };
}

export function handleAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: option,
    };

    return API.saveQuestionAnswer(info).then(() => {
      dispatch(saveAnswer(authedUser, qid, option));
      dispatch(saveUserAnswer(authedUser, qid, option));
    });
  };
}
