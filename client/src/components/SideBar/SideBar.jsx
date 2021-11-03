import React from "react";
import { useState } from "react";

import SideBarNested from "./SideBarNested/SideBarNested";
import SideBarOrderPrice from "./SideBarOrderPrice/SideBarOrderPrice";
import SideBarRangePrice from "./SideBarRangePrice/SideBarRangePrice";
import SideBarRangeDate from "./SideBarRangeDate/SideBarRangeDate";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { setObjGlobal } from "../../redux/actions/index";
import { useDispatch } from "react-redux";
//maneja el ancho de la expansión al tocar el hamburguer button
const drawerWidth = 350;

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleReset = () => {
    const obj = {
      startRange: "",
      endRange: "",
      category: [],
      page: "",
      pageSize: "",
      order: "",
      type: "",
      province: "",
      city: "",
    };
    dispatch(setObjGlobal(obj));
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} sx={{ width: drawerWidth }}>
        <SideBarNested openFromFather={open} />
        <Divider />
        <SideBarOrderPrice text={"Price order"} />
        <Divider />
        <SideBarRangeDate text={"Date order"} />
        <Divider />
        <SideBarRangePrice />
        <Divider />
        <Button
          variant="outlined"
          onClick={handleReset}
          sx={{ width: "20%", margin: "10px auto 10px auto" }}
        >
          Reset
        </Button>
        <Divider />
        <List>
          {["Info", "About", "Something"].map((text, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Divider />
    </Box>
  );
}
