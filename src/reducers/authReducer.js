export default function authReducer(state = null, action) {
  switch (action.type) {
    case "SET_USER":
      return action.id;
    case "UNSET_USER":
      return null;
    default:
      return state;
  }
}
