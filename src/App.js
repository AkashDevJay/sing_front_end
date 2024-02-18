import React from "react";
import { ThemeProvider } from '@emotion/react';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { Provider } from "react-redux";

import { theme } from './styles/globalTheme';
import { MainTab } from "./components/mainTabs/mainTabs.component";
import { MainHeader } from "./components/common/mainHeader.component";
import { store } from "./store/store";
import './App.css';

const useStyles = makeStyles(theme => ({
  subComponent: {
    paddingTop: 1,
    paddingLeft: 1
  }
}))

function App() {

  const classes = useStyles();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <MainHeader userName={'Akash Jayaweera'}/>
          <Box className={classes.subComponent}>
            <MainTab/>
          </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
