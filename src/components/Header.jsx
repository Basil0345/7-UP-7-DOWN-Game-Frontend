import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import CasinoIcon from "@mui/icons-material/Casino";
import { useSelector } from "react-redux";

export default function ButtonAppBar() {
  const userData = useSelector((state) => state.userData);
  return (
    <AppBar position="relative">
      <Toolbar>
        <CasinoIcon />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, marginLeft: 1 }}
        >
          7 UP 7 DOWN
        </Typography>
        <Typography>Score: {userData?.currentAmount}</Typography>
      </Toolbar>
    </AppBar>
  );
}
