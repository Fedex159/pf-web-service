import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

export default function CheckoutCard({ title, img, price, id }) {
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Paper
      sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1, mb: 2, mt: 2 }}
    >
      <Grid container spacing={2} sx={{ gap: 1 }}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 140 }}>
            <Img alt="complex" src={img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary">
                ID: {id}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
