// import { useState } from 'react';
import {
    // BrowserRouter,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
  import Landing from "../pages/Landing";
  import Quiz from "../pages/Quiz";
  
  const PublicRoutes = (props) => {
    // const [errorMessage, setErrorMessage] = useState("");
  
    // <BrowserRouter>
  
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              register={props.register}
              login={props.login}
              setErrorMessage={props.setErrorMessage}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    );
  };
  
  export default PublicRoutes;

