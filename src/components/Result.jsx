import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CasinoIcon from "@mui/icons-material/Casino";

const Result = () => {
  const result = useSelector((state) => state.result);
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        margin: 2,
      }}
    >
      <Box>
        <Typography variant="h6" align="center" gutterBottom>
          Results:
        </Typography>

        {/* Inner container for two dice icons */}
        <Box
          display="flex"
          justifyContent="space-around"
          gap={2}
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CasinoIcon />
            <Typography>{result?.dice1}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CasinoIcon />
            <Typography>{result?.dice2}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            OUTCOME
            <Typography>{result?.sum}</Typography>
            {result?.win ? "Win" : "lose"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Result;
