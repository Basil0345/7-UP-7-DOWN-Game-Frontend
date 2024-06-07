import { Box } from "@mui/material";
import React from "react";

const Spinner = () => {
  return (
    <Box sx={{ margin: 2, display: "flex", alignItems: "center" }}>
      <img src="../../public/180-ring.svg" />
    </Box>
  );
};

export default Spinner;
