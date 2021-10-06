import { useDispatch } from "react-redux";
import { useState } from "react";
import { handleAnswer } from "../actions/handlers";

const Vote = ({ qid,questions, users, authedUser,answered }) => {
  const [option, setOption] = useState("");
  const id = qid;
  const question = questions[id];
  const user = users[authedUser];
  const author = users[questions[id].author];
  console.log(author)
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (option !== "") {
      dispatch(handleAnswer(id, option));
    }
  };
  return (
    <div className="p-4 rounded-3 shadow bg-white mt-4">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4"> Would You Rather...? </h3>

        <div className="d-flex align-items-center mb-4">
          <img
          src={author.avatarURL}
          alt={`${author.name} avatar`}
          width="128"
          className="me-4 rounded-circle"
        />
          <div className="d-flex flex-column  w-100">
            <input
              type="radio"
              className="btn-check"
              name="option"
              value="optionOne"
              id="optionOne"
              defaultChecked={question.optionOne.votes.includes(user.id)}
              onClick={e => setOption(e.target.value)}
            />
            <label className="btn btn-outline-primary mb-2" htmlFor="optionOne">
              {question.optionOne.text}
            </label>

            <input
              type="radio"
              className="btn-check"
              name="option"
              value="optionTwo"
              id="optionTwo"
              defaultChecked={question.optionTwo.votes.includes(user.id)}
              onClick={e => setOption(e.target.value)}
            />
            <label className="btn btn-outline-primary" htmlFor="optionTwo">
              {question.optionTwo.text}
            </label>
          </div>
        </div>

        <button className="btn btn-lg btn-primary w-100">Vote</button>
      </form>
    </div>
  );
};

export default Vote;
