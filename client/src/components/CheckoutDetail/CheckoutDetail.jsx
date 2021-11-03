import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import UserMenu from '../Nav/UserMenu';
import CheckoutCard from '../CheckoutDetail/CheckoutCard/CheckoutCard';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

export default function CheckoutDetail() {
  const cart = useSelector((state) => state.cart);

  let total = [];

  return (
    <>
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
      {cart.length > 0 &&
        cart.map((item) => {
          total.push(item.price);
          return (
            <CheckoutCard
              title={item.title}
              img={item.img}
              price={item.price}
              id={item.id}
            />
          );
        })}

      <Paper
        sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1, mb: 2, mt: 2 }}
      >
        <Grid container spacing={2} sx={{ gap: 1 }}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" color="text.primary">
                  TOTAL:
                  {total.length > 0 && (
                    <Typography gutterBottom variant="h4" component="div">
                      {total.reduce((a, b) => a + b, 0)}
                    </Typography>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: 'pointer' }} variant="button">
                  Buy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
