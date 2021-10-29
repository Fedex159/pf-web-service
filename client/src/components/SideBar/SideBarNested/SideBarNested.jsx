import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useState } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

import SideBarNestedBtnDropDown from '../SideBarNestedBtnDropDown/SideBarNestedBtnDropDown';
import SideBarNestedBtnDropDownInner from '../SideBarNestedBtnDropDownInner/SideBarNestedBtnDropDownInner';
import { getGroups } from '../../../redux/actions';
import FormControl from '@mui/material/FormControl';

import List from '@mui/material/List';

export default function SideBarNested({ openFromFather }) {
  const dispatch = useDispatch();

  const allGroups = useSelector((state) => state.groups);

  useEffect(() => {
    dispatch(getGroups());
  }, []);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (openFromFather) {
      setOpen(!open);
    }
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {allGroups.map((group, index) => {
        return (
          <Box key={index}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <HomeRepairServiceRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={group.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {openFromFather ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <Box sx={{ display: 'flex' }}>
                      <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                      >
                        {group.categories.map((c) => {
                          console.log(c.name);

                          return (
                            <SideBarNestedBtnDropDownInner name={c.name} />
                          );
                        })}
                      </FormControl>
                    </Box>
                  </ListItemButton>
                </List>
              </Collapse>
            ) : (
              <Collapse in={false} timeout="auto" unmountOnExit></Collapse>
            )}
          </Box>
        );
      })}
    </List>
  );
}
