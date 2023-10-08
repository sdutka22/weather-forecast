import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton, Drawer, createTheme, ThemeProvider, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHome, faCircleInfo, faAddressBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ['Gantari', 'sans-serif'].join(','),
  },
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#252C44',
  height: '80px',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
});

const StyledTypography = styled(Typography)({ flexGrow: 1 });

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    width: '300px',
    backgroundColor: 'rgba(255, 255, 255)',
  },
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const menuItems = [
    { text: 'Home', icon: faHome, path: '/' },
    { text: 'About', icon: faCircleInfo, path: '/about' },
    { text: 'Contact', icon: faAddressBook, path: '/contact' },
    { text: 'Date Picker', icon: faCalendar, hasBackground: true, path: '/date-picker' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledTypography variant="h5">
            <FontAwesomeIcon icon={faBolt} style={{ marginRight: '8px', color: 'orange' }} />
            Weather Forecast
          </StyledTypography>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon style={{ fontSize: '35px' }} />}
            </IconButton>
          </Hidden>
          <Hidden smDown>
            {menuItems.map(({ text, hasBackground, path }) => (
              <Link key={text} to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit" style={{ fontSize: '20px', marginRight: '30px', backgroundColor: hasBackground ? '#D46935' : 'transparent', borderRadius: '5px' }}>
                  {text}
                </Button>
              </Link>
            ))}
          </Hidden>
        </StyledToolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <div style={{ textAlign: 'right', padding: '15px' }}>
          <IconButton size="large" edge="end" color="inherit" aria-label="close-menu" onClick={toggleDrawer}>
            <CloseIcon style={{ fontSize: '50px' }} />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <Link key={text} to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem onClick={toggleDrawer}>
                <Button color="inherit" style={{ fontSize: '27px', marginBottom: '30px' }}>
                  <FontAwesomeIcon icon={icon} style={{ marginLeft: '15px', marginRight: '30px' }} />
                  {text}
                </Button>
              </ListItem>
            </Link>
          ))}
        </List>
      </StyledDrawer>
    </ThemeProvider>
  );
};

export default Navbar;
