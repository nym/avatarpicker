import React, { useCallback } from "react";
import { FormContainer } from "react-hook-form-mui";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LandscapeIcon from "@mui/icons-material/Landscape";
import SetupProfileForm from "./SetupProfileForm";
import ProfilePhotoPicker from "./ProfilePhotoPicker";
import { setUserData } from "../user/userSlice";
import { useDispatch } from "react-redux";

export type SetupPageProps = {};

export const SetupPage: React.FC<SetupPageProps> = ({}) => {
  const dispatch = useDispatch();
  const onSuccess = useCallback((data: Record<string, string>) => {
    dispatch(setUserData(data));
  }, []);

  return (
    <FormContainer
      defaultValues={{ firstName: "", lastName: "", topic: "" }}
      onSuccess={onSuccess}
    >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
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
        <ProfilePhotoPicker />
      </Grid>
    </FormContainer>
  );
};

export default SetupPage;
