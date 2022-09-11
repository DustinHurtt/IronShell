// import { useState } from 'react';
import {
    // BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
  import Landing from "../pages/Landing";
  import Quiz from "../pages/Quiz";
  import QuizSetting from "../pages/QuizSettings"
  import Questions from "../pages/Questions"
  import FinalScreen from '../pages/FinalScreen'
  
  const PublicRoutes = (props) => {
    // const [errorMessage, setErrorMessage] = useState("");
  
    // <BrowserRouter>
  
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              registerStudent={props.registerStudent}
              registerMentor={props.registerMentor}
              register={props.register}
              login={props.login}
              setErrorMessage={props.setErrorMessage}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<QuizSetting />} />            
        <Route path="/questions" element={<Questions />} />
        <Route path="/score" element={<FinalScreen />} />
      </Routes>
    );
  };
  
  export default PublicRoutes;

