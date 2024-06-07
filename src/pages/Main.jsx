import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleOption } from "../features/game/gameSlice";

import CasinoIcon from "@mui/icons-material/Casino";
import useApi from "../hooks/useApi";

import { AmountSelector, OptionSelector, Result, Spinner } from "../components";

const Main = () => {
  const userData = useSelector((state) => state.userData);
  const result = useSelector((state) => state.result);
  const [loading, setLoading] = useState(false);
  const [rollDie, checkWin, updateAmount] = useApi();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleOption({ name: e.target.name, value: e.target.value }));
  };

  const onClick = async () => {
    setLoading(true);
    let result = await rollDie();
    if (!result) {
      setLoading(false);
      return;
    }
    result = await checkWin({
      ...result,
      selectedOption: userData?.selectedOption,
    });
    result = await updateAmount({ ...userData, ...result });

    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bet Amount: {userData?.betAmount}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <AmountSelector handleChange={handleChange} />
      </Box>

      <Box sx={{ mb: 4 }}>
        <OptionSelector handleChange={handleChange} />
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          variant="outlined"
          sx={{ padding: 1.5, display: "flex", alignItems: "center", gap: 1 }}
          onClick={onClick}
          disabled={loading}
        >
          <CasinoIcon />
          Roll Die
        </Button>
      </Box>

      {/* result */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Spinner />
        </Box>
      ) : (
        Boolean(result?.dice1) && <Result />
      )}
    </Container>
  );
};

export default Main;
