import * as React from "react";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Zoom from "@mui/material/Zoom";

import { Fab } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import {FormContainer, TextFieldElement, useWatch} from 'react-hook-form-mui'
import { createTheme } from "@mui/material/styles";
const theme = createTheme();

export default function ProfilePhotoPicker() {
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const [firstName, lastName, topic] = useWatch({
    name: ['firstName', 'lastName', 'topic'],
  })

  return (
    <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            verticalAlign: "center",
          }}
        >
          <Grid sx={{}} item xs={false} sm={4} md={12}>
            <Box
              sx={{
                my: 8,
                mx: 5,
                display: "flex",
                flexGrow: 1,
                flexDirection: "row-reverse",
                alignItems: "flex-end",
              }}
            >
            <div>{firstName} {lastName} topic: "{topic}"</div>
              <Zoom
                key={"primary"}
                in={false}
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${true ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
              >
                <Fab
                  variant="extended"
                  color="primary"
                  aria-label="accept"
                  sx={{ ml: 2 }}
                >
                  <ThumbUpIcon sx={{ mr: 1 }} />
                  Accept
                </Fab>
              </Zoom>
              <Zoom
                key={"secondary"}
                in={false}
                timeout={transitionDuration}
                style={{
                  transitionDelay: `${true ? transitionDuration.exit : 0}ms`,
                }}
                unmountOnExit
              >
                <Fab variant="extended" color="secondary" aria-label="reject">
                  <ThumbDownIcon sx={{ mr: 1 }} />
                  Reject
                </Fab>
              </Zoom>
            </Box>
          </Grid>
        </Grid>
  );
}