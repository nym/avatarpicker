import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import router from "./app/router";
import { RouterProvider } from "react-router-dom";

import { store } from './app/store'
import { Provider } from 'react-redux'

const theme = createTheme();
export default function SetupProfile() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
