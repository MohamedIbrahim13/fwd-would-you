import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { unsetUser } from "../actions/authedUser";

const Navbar = () => {
  const { users, authedUser } = useSelector(state => state);
  const user = users[authedUser];
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
		{'<-'} Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {user && (
              <>
                <li className="nav-item">
                  <Link to="/add" className="nav-link">
                    New Question
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/scoreboard" className="nav-link">
                    Scoreboard
                  </Link>
                </li>

                <li className="nav-item">
                  <span role="button" className="nav-link">
                    {user.name}
                  </span>
                </li>

                <li className="nav-item">
                  <span
                    role="button"
                    className="nav-link"
                    onClick={() => {
                      dispatch(unsetUser());
                      return <Redirect to="/" />;
                    }}
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
