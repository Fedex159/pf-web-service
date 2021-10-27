import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

export default function SideBarNested() {
  //   const [open, setOpen] = React.useState(false);
  //   const [openOne, setOpenOne] = React.useState(false);
  //   const [openTwo, setOpenTwo] = React.useState(false);
  //   const [openThree, setOpenThree] = React.useState(false);

  //   const handleClickOne = () => {
  //     setOpenOne(!openOne);
  //   };
  //   const handleClickTwo = () => {
  //     setOpenTwo(!openTwo);
  //   };
  //   const handleClickThree = () => {
  //     setOpenThree(!openThree);
  //   };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {/* {['Repairment/Technicians', 'Classes/Courses', 'Others'].map(
        (text, index) => {
          return (
            <Box key={index}>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <HomeRepairServiceRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="INTERNO" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          );
        }
      )} */}
      <Box>
        <ListItemButton onClick={handleClickOne}>
          <ListItemIcon>
            <HomeRepairServiceRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Repairment/Technicians" />
          {openOne ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openOne} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="INTERNO" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
      <Box>
        <ListItemButton onClick={handleClickTwo}>
          <ListItemIcon>
            <HomeRepairServiceRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Classes/Courses" />
          {openTwo ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openTwo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="INTERNO" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
      <Box>
        <ListItemButton onClick={handleClickThree}>
          <ListItemIcon>
            <HomeRepairServiceRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Others" />
          {openThree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openThree} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="INTERNO" />
            </ListItemButton>
          </List>
        </Collapse>
      </Box>
    </List>
  );
}
