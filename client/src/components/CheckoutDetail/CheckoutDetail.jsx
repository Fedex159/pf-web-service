import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserMenu from '../Nav/UserMenu';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export default function CheckoutDetail() {
  const cookie = useSelector((state) => state.cookie);

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
