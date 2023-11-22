import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router-dom";
import { NavButtonText } from "./styles";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const routes = [
    { to: "/", text: "Home" },
    { to: "/newTask", text: "Create New Task" },
    { to: "/history", text: "History" }
  ]

  const { pathname } = useLocation();

  return (
    <>
      <Drawer data-testID="navbar"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{ bgcolor: "#3E0554", height: 1 }}
        >
          {routes.map(route => (
            <>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <NavButtonText data-testID="button-navbar"
                    $current={route.to === pathname}
                    to={route.to}>
                    {route.text}
                  </NavButtonText>
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
      <IconButton color="inherit" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;