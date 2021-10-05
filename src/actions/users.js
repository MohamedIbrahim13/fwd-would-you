export function getUsers(users) {
  return {
    type: "GET_USERS",
     users,
  };
}

export function addUserQuestion(authedUser, qid) {
  return {
    type: "USER_ADD_QUESTION",
    authedUser, qid 
  };
}

export function saveUserAnswer(auth, qid, option) {
  return { type: "USER_ANSWER",  auth, qid, option  };
}
