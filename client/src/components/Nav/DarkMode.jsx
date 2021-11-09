import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { putDark } from '../../redux/actions';

import { Switch } from '@mui/material';

export default function DarkMode() {
  const darkGlobal = useSelector((state) => state.darkTheme);
  const dispatch = useDispatch();

  const setDark = () => {
    dispatch(putDark(!darkGlobal));
    localStorage.setItem('darkMode', !darkGlobal);
  };

  return <Switch color="default" onClick={setDark} checked={darkGlobal} />;
}
