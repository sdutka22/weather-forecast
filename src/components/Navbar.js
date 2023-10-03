import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const StyledAppBar = styled(AppBar)({ 
  backgroundColor: '#252C44', 
  height: '80px',
});

const StyledToolbar = styled(Toolbar)({ 
  display: 'flex', 
  justifyContent: 'space-between',
  alignItems: 'center', // Wyśrodkuj elementy w pionie
  height: '100%', // Zajmij całą dostępną wysokość
});

const StyledTypography = styled(Typography)({ flexGrow: 1 });

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '250px',
    backgroundColor: 'rgba(255, 255, 255)',
  },
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const menuItems = ['Home', 'About', 'Contact'];

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledTypography variant="h5">
            <FontAwesomeIcon icon={faBolt} style={{ marginRight: '8px', color: 'orange' }} />
            Weather Forecast
          </StyledTypography>
          <Hidden mdUp>
            <IconButton size="large" edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon  style={{ fontSize: '35px' }}/>}
            </IconButton>
          </Hidden>
          <Hidden smDown>
            {menuItems.map((text) => (
              <Button key={text} color="inherit">
                {text}
              </Button>
            ))}
          </Hidden>
        </StyledToolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ textAlign: 'right', padding: '8px' }}>
          <IconButton size="large" edge="end" color="inherit" aria-label="close-menu" onClick={toggleDrawer}>
            <CloseIcon style={{ fontSize: '35px' }}/>
          </IconButton>
        </div>
        <List>
          {menuItems.map((text) => (
            <ListItem key={text} onClick={toggleDrawer}>
              <Button color="inherit" style={{ fontSize: '20px'}}>
                
                {text}
              </Button>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </React.Fragment>
  );
};

export default Navbar;
