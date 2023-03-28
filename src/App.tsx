import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";

import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import SetupProfileForm from "./SetupProfileForm";
import ProfilePhotoPicker from "./ProfilePhotoPicker";
//import UnsplashUploader from "./UnsplashReact";
import {FormContainer} from 'react-hook-form-mui'

// routing

const theme = createTheme();
export default function SetupProfile() {
  return (
    <ThemeProvider theme={theme}>
      <FormContainer
        defaultValues={{firstName: '', lastName: '', topic: '', valid: false}}
        onSuccess={data => console.log(data)}
        >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LandscapeIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Setup Profile
              </Typography>

              <SetupProfileForm />
            </Box>
          </Grid>
          <ProfilePhotoPicker  />
      </Grid>
      </FormContainer>
    </ThemeProvider>
  );
}
