import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const AmountSelector = ({ handleChange }) => (
  <FormControl component="fieldset" fullWidth>
    <FormLabel component="legend" sx={{ mb: 2 }}>
      Select Amount
    </FormLabel>
    <RadioGroup row name="select-amount">
      <FormControlLabel
        value="100"
        onChange={handleChange}
        control={<Radio />}
        label="100"
      />
      <FormControlLabel
        value="200"
        onChange={handleChange}
        control={<Radio />}
        label="200"
      />
      <FormControlLabel
        value="500"
        onChange={handleChange}
        control={<Radio />}
        label="500"
      />
    </RadioGroup>
  </FormControl>
);

export default AmountSelector;
