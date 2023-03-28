import * as React from "react";

import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Zoom from "@mui/material/Zoom";
import Grid from "@mui/material/Grid";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  TextFieldElement,
  useWatch,
  useFormContext,
} from "react-hook-form-mui";
import { useState } from "react";
import { FormProps } from "./FormProps";

import { createTheme } from "@mui/material/styles";
const theme = createTheme();

export default function SetupProfileForm() {
  const data = useFormContext();

  const [values, setValues] = useState<FormProps>();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const [selectTopic, setSelectTopic] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectTopic(event.target.value);

    
    if (event.target.value !== "other") {
        // this doesn't seem to do anything
        let v: FormProps = {firstName: data.getValues("firstName"), lastName: data.getValues("lastName"), topic: "sports", valid: true}
        setValues(v);
        //this does though
        data.setValue("topic", event.target.value);
        data.setValue("valid", data.formState.isValid);
    }
    else {
        data.setValue("topic", "");
        // TODO: hookup a better way to determine if valid based on FormContainer
        data.setValue("valid", false);
    }
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let v: FormProps = {firstName: data.getValues("firstName"), lastName: data.getValues("lastName"), topic: "wildlife", valid: true}
    setValues(v);
    console.log(data.formState.isValid);
    data.setValue("valid", data.formState.isValid);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextFieldElement
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldElement
            required
            fullWidth
            id="lastName"
            label="Surname"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
      </Grid>
      <div>{data.formState.isValid}</div>
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
            value={selectTopic}
            label="Preferred Topic"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"travel"}>Travel</MenuItem>
            <MenuItem value={"sports"}>Sports</MenuItem>
            <MenuItem value={"cars"}>Cars</MenuItem>
            <MenuItem value={"wildlife"}>Wildlife</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
          <FormHelperText>
            This will help you pick a unique photo for every time you login
          </FormHelperText>

          <Zoom in={selectTopic === "other"}>
            <div>
              <TextFieldElement
                margin="normal"
                required={selectTopic === "other"}
                fullWidth
                name="topic"
                label="Other"
                type="text"
                id="topic"
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
