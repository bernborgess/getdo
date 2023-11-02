import {
  AppBar,
  CssBaseline,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { NavButtonText } from "./styles";

interface RouteChip {
  to: string,
  text: string
}

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const routes: RouteChip[] = [
    { to: "/", text: "Home" },
    { to: "CCCCCC", text: "Create New Task" },
    { to: "DDDDDD", text: "History" }
  ]

  const { pathname } = useLocation();

  return (
    <div>
      <AppBar
        sx={{ bgcolor: "#3E0554" }}
        position="static"
      >
        <CssBaseline />
        <Toolbar>
          {isMobile ? (<DrawerComponent />) : (

            <Stack direction="row" spacing={2}>
              {routes.map(route => (
                <NavButtonText
                  $current={route.to === pathname}
                  to={route.to}>
                  {route.text}
                </NavButtonText>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}
export default Navbar;