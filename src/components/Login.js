import { useDispatch } from "react-redux";
import { setUser } from "../actions/authedUser";

const SignIn = ({users}) => {

  const dispatch = useDispatch();

  return (
    <div className="p-4 mt-4 rounded-3 shadow-lg bg-white">
      <form>
        <h2 className="display-4 mb-4"> Sign In </h2>
        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            defaultValue="0"
            onChange={e => {
              dispatch(setUser(e.target.value));
            }}
          >
		  <option value="0">Open this select menu</option>
            {Object.keys(users).map(user => (
              <option key={user} value={user}>
                {user.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}
              </option>
            ))}
          </select>
          <label htmlFor="floatingSelect">Select User</label>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
