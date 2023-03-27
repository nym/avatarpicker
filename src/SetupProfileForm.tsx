import * as React from "react";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Zoom from "@mui/material/Zoom";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

export default function SetupProfileForm() {
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [topic, setTopic] = React.useState("");
  let otherSelected:boolean = false;

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value == "other") {
        otherSelected = true;
    } else {
        otherSelected = false;
    }
    setTopic(event.target.value);
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fname: data.get("fname"),
      lname: data.get("lname"),
    });
  };
  
  return (
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
      <Zoom
        key={"pic"}
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${true ? transitionDuration.exit : 0}ms`,
        }}
        unmountOnExit
      >
        <FormControl sx={{ mt: 2, minWidth: 120 }} fullWidth>
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
            <MenuItem value={"sports"}>Sports</MenuItem>
            <MenuItem value={"cars"}>Cars</MenuItem>
            <MenuItem value={"wildlife"}>Wildlife</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
          <FormHelperText>
            This will help you pick a unique photo for every time you login
          </FormHelperText>
          
          <Zoom in={otherSelected}
          >
            <div>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="other"
                    label="Other"
                    type="text"
                    id="other"
                    onChange={handleOtherChange}
                />
                <FormHelperText>
                    When you type, the image to the right will update based on your
                    input
                </FormHelperText>
            </div>
          </Zoom>
        </FormControl>
      </Zoom>
    </Box>
  );
}
