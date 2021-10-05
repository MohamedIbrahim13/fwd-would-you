import { Link } from "react-router-dom";


const Widget = ({ qid,questions, users, authedUser }) => {
  const id = qid;
  const question = questions[id];
  const author = users[questions[id].author];

  return (
    <div className="p-4 rounded-3 shadow bg-white mb-4">
      <h3 className="text-center mb-4">{author.name} Asks: </h3>
      <div className="d-flex align-items-center">
        <img
          src={author.avatarURL}
          alt={`${author.name} avatar`}
          width="128"
          className="me-4 rounded-circle"
        />
        <ul className="list-unstyled w-100 mb-0">
          <li
            className={`p-2 text-center rounded mb-2 border border-primary ${
              question.optionOne.votes.includes(authedUser)
                ? "bg-primary text-light"
                : ""
            } `}
          >
            {question.optionOne.text}
          </li>
          <li
            className={`p-2 text-center rounded mb-2 border border-primary ${
              question.optionTwo.votes.includes(authedUser)
                ? "bg-primary text-light"
                : ""
            } `}
          >
            {question.optionTwo.text}
          </li>
        </ul>
      </div>
      <Link to={`/questions/${question.id}`}>
        <button className="btn btn-lg btn-primary w-100 mt-4">Vote</button>
      </Link>
    </div>
  );
};

export default Widget;

