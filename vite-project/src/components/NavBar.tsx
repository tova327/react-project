import { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme, styled } from '@mui/material';
import User from './User';
import { Link } from 'react-router-dom';
import { MainUserContext } from './userReducer';

// Custom styles using MUI's styled API
const CustomAppBar = styled(AppBar)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height: '70px',
    position: 'sticky',
    top: 0,
    zIndex: 99,
    padding: theme.spacing(0, 2),
}));

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.light,
    },
    margin: theme.spacing(0, 1),
    textTransform: 'none',
}));

const Logo = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
}));

const NavBar = () => {
    const { state: cuser } = useContext(MainUserContext);
    const theme = useTheme();

    return (
        <CustomAppBar>
            <Toolbar>
                <Logo>
                    <User />
                </Logo>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: theme.palette.common.white }}>
                    MyApp
                </Typography>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <CustomButton>
                        Home
                    </CustomButton>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <CustomButton>
                        About
                    </CustomButton>
                </Link>
                <Link to='/recipes' style={{ textDecoration: 'none' }}>
                    <CustomButton>
                        Get All Recipes
                    </CustomButton>
                </Link>
                {cuser.id !== 0 && (
                    <Link to='/recipes/add' style={{ textDecoration: 'none' }}>
                        <CustomButton>
                            Add a Recipe
                        </CustomButton>
                    </Link>
                )}
            </Toolbar>
        </CustomAppBar>
    );
};

export default NavBar;