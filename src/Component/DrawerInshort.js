import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import categories from '../data/category';
import { TextField } from '@mui/material';



export default function SwipeableTemporaryDrawer({setcategory}) {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
  const [state, setState] = React.useState({
   
    left: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200, }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
      <ListItem>Categories</ListItem>
    </List>
    <Divider />
    <List>
        {categories.map((text, index) => (
          <ListItem button key={text} disablePadding  onClick={()=>setcategory(text)}>
            <ListItemButton>
            
            <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          ))}
      </List>

    </Box>
    );

    return (
      
      
      <ThemeProvider theme={darkTheme}>
      <div>
      
    <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}><MenuIcon></MenuIcon></Button>
          <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
          >
          {list('left')}
          </SwipeableDrawer>
          </React.Fragment>
          
          </div>
          </ThemeProvider>
          
          );
        }
        