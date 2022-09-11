import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirstMountState } from 'react-use';
import { post } from "./authService/authService";

import SnackbarError from "./components/SnackbarError";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

import NavBar from "./components/Entry/NavBar";

const AuthorizationContext  = React.createContext();

const App = (props) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const isFirstMount = useFirstMountState();

    const navigate = useNavigate();

    let token = localStorage.getItem("authToken");

  const loginMentor = async (credentials) => {
    post("/mentors/login", credentials)
        .then((results) => {
          localStorage.setItem("authToken", results.data.token);
          localStorage.setItem("id", results.data.id);
          navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
  };

  const loginStudent = async (credentials) => {
    post("/students/login", credentials)
        .then((results) => {
          localStorage.setItem("authToken", results.data.token);
          localStorage.setItem("id", results.data.id);
          navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
  };

  const registerMentor = async (credentials) => {
    post("/mentors/signup", credentials)
        .then((results) => {
          localStorage.setItem("authToken", results.data.token);
          localStorage.setItem("id", results.data.id);
          navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
  };

  const registerStudent = async (credentials) => {
    post("/students/signup", credentials)
        .then((results) => {
          localStorage.setItem("authToken", results.data.token);
          localStorage.setItem("id", results.data.id);
          navigate("/");
        })
        .catch((err) => {
          console.log("Something went wrong", err.message);
        });
  };

  const logout = () => {
    console.log("Clicking LOGOUT")
    localStorage.clear();
    navigate("/");
  };

  useEffect(()=> {
    if (!isFirstMount) {
    setSnackBarOpen(true)
    }
  }, [errorMessage])

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      {snackBarOpen && (
        <SnackbarError
          setSnackBarOpen={setSnackBarOpen}
          errorMessage={errorMessage}
          snackBarOpen={snackBarOpen}
        />
      )}

        <AuthorizationContext.Provider value={token}>
            {!!token ? <PrivateRoutes logout={logout} /> : <PublicRoutes registerMentor={registerMentor} registerStudent={registerStudent} loginMentor={loginMentor} loginStudent={loginStudent} setErrorMessage={setErrorMessage}  />}
        </AuthorizationContext.Provider>

{/* 
-Quiz with style but I can't figure out the route errors
-made a new folder for the redux I'm using
-added a few dependencies 
-any .jsx file added was me (just trying to keep the files separate and with what im used to )
- added hooks folder for custom axios call
-only messed with the NavBar a little bit
 */}
        
        {/* <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route path="/">
              <Typography variant="h2" fontWeight="bold">
                Quiz App
              </Typography>
              <QuizSettings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/score">
              <FinalScreen />
            </Route>
          </Routes>
        </Box>
      </Container> */}

    </div>
  );
};

export default App;