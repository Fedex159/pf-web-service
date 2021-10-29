import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGroups } from '../../../redux/actions';
import Box from '@mui/material/Box';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SideBarNestedBtnDropDownInner({
  categories,
  text,
  name,
}) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const allGroups = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  //   console.log(allGroups[0].categories[0].name);

  const result = [];

  // allGroups.map((c, index) => {
  //   // console.log(c.categories);
  //   c.categories.map((cc) => {
  //     result.push(cc);
  //   });
  // });

  // console.log(result);

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} name={name} onChange={handleChange} />
      }
      label={name}
    />
  );
}
