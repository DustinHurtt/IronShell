import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import { Grid } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Signup from "../components/Entry/Signup";
import Login from '../components/Entry/Login'
import SideImage from "../components/Entry/SideImage";

// import {theme} from '../themes/theme'



const Landing = (props) => {
  const [switchEntry, setSwitchEntry] = useState(false);

  const params = useParams()
  
  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: 14,
      button: {
        textTransform: "none",
        letterSpacing: 0,
        fontWeight: "bold",
      },
    },
    overrides: {
      MuiInput: {
        input: {
          fontWeight: "bold",
        },
      },
    },
    palette: {
      primary: { main: "#ffb8b0" },
      secondary: { main: "#B0B0B0" },
    },
  });

  const changeEntry = () => {
    setSwitchEntry(!switchEntry);

    const loginCheck = `/${params}`
    console.log(loginCheck)
    // if( loginCheck.includes("login")) {
    //   setSwitchEntry(switchEntry)
    // }
  };



  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <SideImage item />
        {switchEntry ? (
          <Login
            user={props.user}
            login={props.login}
            setErrorMessage={props.setErrorMessage}

            changeEntry={changeEntry}
          />
        ) : (
          <Signup
            registerStudent={props.registerStudent}
            registerMentor={props.registerMentor}
            login={props.login}
            setErrorMessage={props.setErrorMessage}
            changeEntry={changeEntry}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default Landing;
