import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { handleQuestion } from "../actions/handlers";

const NewQuestion = ({users,authedUser,questions}) => {
  const [firstOption, setFirstOpt] = useState(null);
  const [secondOption, setSecondOpt] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(handleQuestion(firstOption, secondOption)).then(() => {
      history.push("/");
    });
  };
  return (
    <>
      <form
        className="mt-4 p-4 bg-white rounded-3 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="display-4 mb-4"> Would Your Rather ? </h2>

        <div className="form-floating mb-2">
          <input
            type="text"
            className="form-control"
            id="floatingOptionOne"
            placeholder="OptionOne"
            onChange={e => setFirstOpt(e.target.value)}
          />
          <label htmlFor="floatingOptionOne">OptionOne</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingOptionTwo"
            placeholder="OptionTwo"
            onChange={e => setSecondOpt(e.target.value)}
          />
          <label htmlFor="floatingOptionTwo">OptionTwo</label>
        </div>

        <button className="btn btn-lg btn-primary w-100 mt-4">
          Add Question
        </button>
      </form>
    </>
  );
};

export default NewQuestion;

