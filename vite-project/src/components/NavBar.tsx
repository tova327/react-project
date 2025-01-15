import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import User from './User';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <AppBar position="static" sx={{ height: '250px' ,padding:"20px"}}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    
                    
                    <User/>
                </Typography>
                <Typography variant="h6" style={{ flexGrow: 5 }}>
                    
                    MyApp
                    
                </Typography>
                <Link to='/'>
                <Button color="inherit" >
                    Home
                </Button>
                </Link>
                <Link to='/about'>
                <Button color="inherit" >
                    About
                </Button>
                </Link>
                
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;