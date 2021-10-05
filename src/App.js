import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { handleData } from "./actions/handlers";
import Navbar from "./components/Navbar";
import SignIn from "./components/Login";
import Dashboard from "./components/Dashboard";
import NewQuestion from "./components/NewQuestion";
import QuestionPage from "./components/QuestionPage";
import Scoreboard from "./components/Scoreboard";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const {users,authedUser,questions} = useSelector(state => state);
  console.log(authedUser,users,questions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleData());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            {(() => {
              if (authedUser !== null) {
                return (
                  <>
                    <Route exact path="/" component={()=><Dashboard users={users} authedUser={authedUser} questions={questions}/>}  />
                    <Route path="/add" component={()=><NewQuestion users={users} authedUser={authedUser} questions={questions}/>} />
                    <Route
                      path="/questions/:question_id"
                      component={()=><QuestionPage users={users} authedUser={authedUser} questions={questions}/>}
                    />
                    <Route path="/scoreboard" component={()=><Scoreboard users={users} authedUser={authedUser} questions={questions}/>} />
					
                  </>
                );
              } else {
                return <Route path="/" component={()=><SignIn users={users}/>} />;
              }
            })()}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
