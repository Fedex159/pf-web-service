import React from 'react';
import { useState } from 'react';

import SideBarNested from './SideBarNested/SideBarNested';
import SideBarRanges from './SideBarRanges/SideBarRanges';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Drawer } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//maneja el anocho de la expansión al tocar el hamburguer button
const drawerWidth = 350;

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);
  const [rangePrice, setRangePrice] = useState({
    ascending: true,
    descending: false,
  });

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleChangeCheck = (event) => {
    if (event.target.name === 'ascending') {
      setRangePrice({
        descending: false,
        [event.target.name]: event.target.checked,
      });
    }
    if (event.target.name === 'descending') {
      setRangePrice({
        ascending: false,
        [event.target.name]: event.target.checked,
      });
    }
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
        <List>
          {['Price Range', 'Date Range'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
              <FormControlLabel
                name="ascending"
                value="ASC"
                control={<Checkbox />}
                label="asc"
                labelPlacement="top"
                checked={rangePrice.ascending}
                onChange={handleChangeCheck}
              />
              <FormControlLabel
                name="descending"
                value="DES"
                control={<Checkbox />}
                label="des"
                labelPlacement="top"
                checked={rangePrice.descending}
                onChange={handleChangeCheck}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Info', 'About', 'Something'].map((text, index) => (
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
