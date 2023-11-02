import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,

} from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import DrawerComponent from "./Drawer";

function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          {isMobile ? (
            <DrawerComponent />
          ) : (

            <Stack direction="row" spacing={2}>
              <Button color="secondary"
                onClick={() => navigate("/")}><Typography>Home</Typography></Button>

              <Button color="secondary"
                onClick={() => navigate("/CCCCCC")}><Typography>Create New Task</Typography></Button>

              <Button color="secondary"
                onClick={() => navigate("/DDDDD")}><Typography>History</Typography></Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}
export default Navbar;
