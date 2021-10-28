import * as React from 'react';
import SideBarBtnDropDown from '../SideBarBtnDropDown/SideBarBtnDropDown';
import List from '@mui/material/List';

export default function SideBarNested() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {['Repairment/Technicians', 'Classes/Courses', 'Others'].map(
        (text, index) => {
          return <SideBarBtnDropDown text={text} key={index} />;
        }
      )}
    </List>
  );
}
