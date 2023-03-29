import * as React from "react";
import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { Box, Fab } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useTheme } from "@mui/material/styles";

import { useFormContext, useWatch } from "react-hook-form-mui";
import useUnsplashImage from "./useUnsplashImage";

export default function ProfilePhotoPicker() {
  const [counter, setCounter] = useState(0);
  const theme = useTheme();
  const topic = useWatch({ name: "topic" });
  const customTopic = useWatch({ name: "customTopic" });
  useEffect(() => {
    setCounter(0);
  }, [topic, customTopic]);
  const { formState: { isValid }, setValue } = useFormContext();
  const { imageUrl, results } = useUnsplashImage(topic === "other" ? customTopic : topic, counter);
  useEffect(() => setValue("imageUrl", imageUrl), [imageUrl]);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[50]
            : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        verticalAlign: "center"
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
            alignItems: "flex-end"
          }}
        >
          <Zoom
            key={"primary"}
            in={isValid}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${true ? transitionDuration.exit : 0}ms`
            }}
            unmountOnExit
          >
            <Fab
              variant="extended"
              color="primary"
              aria-label="accept"
              sx={{ ml: 2 }}
              type="submit"
            >
              <ThumbUpIcon sx={{ mr: 1 }} />
              Accept
            </Fab>
          </Zoom>
          <Zoom
            key={"secondary"}
            in={isValid}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${true ? transitionDuration.exit : 0}ms`
            }}
            unmountOnExit
          >
            <Fab variant="extended" color="secondary" aria-label="reject" onClick={() => setCounter((counter + 1) % results)}>
              <ThumbDownIcon sx={{ mr: 1 }} />
              Reject
            </Fab>
          </Zoom>
        </Box>
      </Grid>
    </Grid>
  );
}
