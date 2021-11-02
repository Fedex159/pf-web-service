import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserMenu from '../Nav/UserMenu';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function CheckoutDetail() {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{ mr: 2, display: 'flex', justifyContent: 'space-between' }}
        >
          <IconButton
            component={Link}
            to="/home"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
          <UserMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
