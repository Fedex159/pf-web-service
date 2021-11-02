import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

export default function Checkout() {
  const cookie = useSelector((state) => state.cookie);

  console.log(cookie);

  return (
    <>
      {cookie && cookie.length > 0 ? (
        <Button variant="contained" disabled={false}>
          Checkout
        </Button>
      ) : (
        <Button variant="contained" disabled={true}>
          Checkout
        </Button>
      )}
    </>
  );
}
