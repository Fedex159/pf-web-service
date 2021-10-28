import * as React from 'react';
import { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SideBarNestedBtnDropDownInner({ allGroups, text }) {
  console.log('INNER', allGroups[0].categories[0].name);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} name={text} onChange={handleChange} />
      }
      label={text}
    />
  );
}
