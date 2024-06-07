import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const OptionSelector = ({ handleChange }) => (
  <FormControl component="fieldset" fullWidth>
    <FormLabel component="legend" sx={{ mb: 2 }}>
      Choose 1 of the 3 options
    </FormLabel>
    <RadioGroup row name="choose-option">
      <FormControlLabel
        value="7up"
        onChange={handleChange}
        control={<Radio />}
        label="7up"
      />
      <FormControlLabel
        value="7down"
        onChange={handleChange}
        control={<Radio />}
        label="7down"
      />
      <FormControlLabel
        value="lucky7"
        onChange={handleChange}
        control={<Radio />}
        label="7"
      />
    </RadioGroup>
  </FormControl>
);

export default OptionSelector;
