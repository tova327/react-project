import  { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import User from './User';
import { Link } from 'react-router-dom';
import { MainUserContext } from './userReducer';

const NavBar = () => {
    const { state: cuser } = useContext(MainUserContext)
    return (
        <AppBar position="static" sx={{ height: '250px' ,padding:"20px",position:"sticky",top:'0',zIndex:'99'}}>
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
                <Link to='/recipes'>
                <Button color="inherit" >
                    get all recipes
                </Button>
                </Link>

                {
                    cuser.id!=0&&
                    <Link to='/recipes/add'>
                    <Button color="inherit" >
                        add a recipe
                    </Button>
                    </Link>

                }
                
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;