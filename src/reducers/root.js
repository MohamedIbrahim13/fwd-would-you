import { combineReducers } from "redux";
import questions from "./questions";
import users from "./users";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  questions: questions,
  users: users,
  authedUser: authReducer,
});

export default rootReducer;
