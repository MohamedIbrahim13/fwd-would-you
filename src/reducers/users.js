export default function users(state = {}, action) {
  switch (action.type) {
	case "GET_USERS":
      return {
        ...state,
        ...action.users,
    };
    case "USER_ANSWER":
      const { qid, option, auth } = action;
      return {
        ...state,
        [auth]: {
          ...state[auth],
          answers: {
            ...state[auth].answers,
            [qid]: option,
          },
        },
      };
    case "USER_ADD_QUESTION":
      const { authedUser,qid:id} = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat([id]),
        },
      };
    default:
      return state;
  }
}
