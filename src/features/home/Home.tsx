import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { RootState } from '../../app/store';

export default function Home() {
  const {data: userData} = useSelector((state: RootState) => state.user )
  let imageUrl = "./blossom.jpg"

  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.imageUrl) {
      navigate('/edit');
    }
  });

  if (userData.imageUrl) {
    imageUrl = userData.imageUrl;
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
      
    </Grid>
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
        <Typography component="h1" variant="h5">
          Welcome, { userData.firstName } { userData.lastName}!
        </Typography>
        <br/>
        <Link to={`/edit/`}>Edit Profile</Link>
      </Box>
    </Grid>

  </Grid>
  );
}
