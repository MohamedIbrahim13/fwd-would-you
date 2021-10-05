import Results from "./Results";
import Vote from "./Vote";
import NotFound from "./404";
import { useParams } from "react-router";

const QuestionPage = ({ questions, users, authedUser }) => {
  const { question_id } = useParams();
  const id = question_id;
  console.log(questions,id)
  const question = questions[id];
  const answered = users[authedUser].answers.hasOwnProperty(id);
  if (!question) {
    return <NotFound />;
  } else if (answered) {
    return <Results qid={id} answered={answered} users={users} questions={questions} authedUser={authedUser}/>;
  } else return <Vote qid={id} answered={answered} users={users} questions={questions} authedUser={authedUser}/>;
};

export default QuestionPage;

