export function addQuestion(question) {
  return dispatch => {
    dispatch({
      type: "ADD_QUESTION",
      question,
    });
  };
}

export function getQuestions(questions) {
  return {
    type: "GET_QUESTIONS",
     questions,
  };
}

export function saveAnswer(authedUser, qid, answer) {
  return {
    type: "SAVE_ANSWER",
      authedUser,
      qid,
      answer,
    
  };
}
