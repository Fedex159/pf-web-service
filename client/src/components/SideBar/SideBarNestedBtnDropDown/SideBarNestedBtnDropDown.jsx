import React from 'react';
import { useState } from 'react';

import SideBarNestedBtnDropDownInner from '../SideBarNestedBtnDropDownInner/SideBarNestedBtnDropDownInner';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

export default function SideBarNestedBtnDropDown({
  index,
  text,
  openFromFather,
  allGroups,
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (openFromFather) {
      setOpen(!open);
    }
  };
}

// const categoriesFromGroups = [];
// allGroups.map((g) => categoriesFromGroups.push(g.categories));

// <Box key={index}>
//   <ListItemButton onClick={handleClick}>
//     <ListItemIcon>
//       <HomeRepairServiceRoundedIcon />
//     </ListItemIcon>
//     <ListItemText primary={text} />
//     {open ? <ExpandLess /> : <ExpandMore />}
//   </ListItemButton>
//   {openFromFather ? (
//     <Collapse in={open} timeout="auto" unmountOnExit>
//       <List component="div" disablePadding>
//         <ListItemButton sx={{ pl: 4 }}>
//           <Box sx={{ display: 'flex' }}>
//             <FormControl
//               sx={{ m: 3 }}
//               component="fieldset"
//               variant="standard"
//             >
//               {/* {<SideBarNestedBtnDropDownInner />} */}
//             </FormControl>
//           </Box>
//         </ListItemButton>
//       </List>
//     </Collapse>
//   ) : (
//     <Collapse in={false} timeout="auto" unmountOnExit></Collapse>
//   )}
// </Box>
// );
