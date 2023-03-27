import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Box }  from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';

import { Typography } from '@mui/material';
import { Fab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const theme = createTheme();

export default function SignIn() {
  const [topic, setTopic] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fname: data.get('fname'),
      lname: data.get('lname'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Setup Profile
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fname"
              label="Name"
              name="fname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lname"
              label="Surname"
              type="text"
              id="lname"
            />
            <FormControl sx={{mt: 2, minWidth: 120 }} fullWidth>
                <InputLabel id="preferred-topic-label">Preferred Topic</InputLabel>
                <Select
                    labelId="preferred-topic-label"
                    id="preferred-topic-helper"
                    value={topic}
                    label="Preferred Topic"
                    onChange={handleChange}
                  >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'sports'}>Sports</MenuItem>
                  <MenuItem value={'cars'}>Cars</MenuItem>
                  <MenuItem value={'wildlife'}>Wildlife</MenuItem>
                  <MenuItem value={'other'}>Other</MenuItem>
                </Select>
                <FormHelperText>This will help you pick a unique photo for every time you login</FormHelperText>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="other"
                  label="Other"
                  type="text"
                  id="other"
                  hidden
                />
                <FormHelperText>When you type, the image to the right will update based on your input</FormHelperText>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          verticalAlign: 'center',
        }}
      >
        <Grid 
          sx={{marginTop: '90vh'}}
          item
          xs={false}
          sm={4}
          md={12}
        >
          <Box
            sx={{
              my: 8,
              mx: 5,
              display: 'flex',
              flexDirection: 'row-reverse',
              alignItems: 'left',
            }}
          > 
            <Fab variant="extended"  color="primary" aria-label="accept" sx={{ ml: 2 }}>
              <NavigationIcon sx={{ mr: 1 }} />
              Accept
            </Fab>
            <Fab variant="extended" color="secondary" aria-label="reject" >
              <NavigationIcon sx={{ mr: 1 }} />
              Reject
            </Fab>
          </Box>
        </Grid>
      </Grid>
      </Grid>
    </ThemeProvider>
  );
}
