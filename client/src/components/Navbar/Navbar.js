import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';

import memoriesLogo from '../../images/memoriesLogo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push('/login');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/feed" className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2" align="center">ShareIt</Typography>
        <img className={classes.image} src={memoriesLogo} alt="icon" height="40px" />
      </Link>
      
      {user?.result && (
        <div className={classes.navLinks}>
          <Button 
            component={Link} 
            to="/feed" 
            className={classes.navButton}
            startIcon={<HomeIcon />}
          >
            Feed
          </Button>
          <Button 
            component={Link} 
            to="/discover" 
            className={classes.navButton}
            startIcon={<ExploreIcon />}
          >
            Discover
          </Button>
        </div>
      )}

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/login" variant="contained" className={classes.loginButton}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
