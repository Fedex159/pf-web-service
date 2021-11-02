import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

export default function CheckoutBtn() {
  const cookie = useSelector((state) => state.cookie);

  return (
    <>
      {cookie && cookie.length > 0 ? (
        <Button variant="contained" disabled={false} href="/checkout">
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
