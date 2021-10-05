
const Results = ({ qid,answered,questions, users, authedUser }) => {
  const id = qid;
  const question = questions[id];
  const allVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const user = users[authedUser];
  const author = users[questions[id].author];
  console.log(author)

  const optionOnePercentage = (
    (question.optionOne.votes.length / allVotes) *
    100
  ).toFixed(1);
  const optionTwoPercentage = (
    (question.optionTwo.votes.length / allVotes) *
    100
  ).toFixed(1);
  return (
    <div className="p-4 rounded-3 shadow bg-white mt-4">
      <h3 className="text-center mb-4">
        {author.name} Poll Results: {"{ "}
        {allVotes}
        {" }"}
      </h3>

      <div className="d-flex align-items-center">
        <img
          src={author.avatarURL}
          alt={`${author.name} avatar`}
          width="128"
          className="me-4 rounded-circle"
        />
        <ul className="list-unstyled w-100 mb-0">
          <li className="p-2 rounded mb-2 border">
            <p className="fw-bold mb-1">{question.optionOne.text}</p>
            <div className="d-flex">
              <div className="progress w-100" style={{ height: "30px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${optionOnePercentage}%`,
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {optionOnePercentage} %
                </div>
              </div>
              <p
                className=" text-center rounded bg-danger text-light mb-0 ms-2"
                style={{ height: "30px", width: "80px", lineHeight: "30px" }}
              >
                {question.optionOne.votes.length} / {allVotes}
              </p>
            </div>
          </li>
          <li className="p-2 rounded mb-2 border">
            <p className="fw-bold mb-1">{question.optionTwo.text}</p>
            <div className="d-flex">
              <div className="progress w-100" style={{ height: "30px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${optionTwoPercentage}%`,
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {optionTwoPercentage} %
                </div>
              </div>
              <p
                className=" text-center rounded bg-danger text-light mb-0 ms-2"
                style={{ height: "30px", width: "80px", lineHeight: "30px" }}
              >
                {question.optionTwo.votes.length} / {allVotes}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Results;
