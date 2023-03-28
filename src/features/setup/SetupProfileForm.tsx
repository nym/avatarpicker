import * as React from "react";

import { Box } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Grid from "@mui/material/Grid";

import FormHelperText from "@mui/material/FormHelperText";
import { SelectElement, TextFieldElement, useWatch } from "react-hook-form-mui";

const topics = [
  {
    id: "travel",
    label: "Travel"
  },
  {
    id: "cars",
    label: "Cars"
  },
  {
    id: "wildlife",
    label: "Wildlife"
  },
  {
    id: "other",
    label: "Other"
  }
];

export default function SetupProfileForm() {
  const selectedTopic = useWatch({ name: "topic" });

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

      <SelectElement
        id="topic"
        label="Topic"
        fullWidth
        name="topic"
        options={topics}
        required
        sx={{ mt: 2, minWidth: 120 }}
      />
      <Zoom in={selectedTopic === "other"}>
        <div>
          <TextFieldElement
            margin="normal"
            validation={{
              validate: (value: string) => !!(selectedTopic !== "other" || value)
            }}
            fullWidth
            name="customTopic"
            label="Other"
            type="text"
            id="customTopic"
          />
          <FormHelperText>
            When you type, the image to the right will update based on your
            input
          </FormHelperText>
        </div>
      </Zoom>
    </Box>
  );
}
