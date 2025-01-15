import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                Welcome to MyApp!
            </Typography>
            <Typography variant="body1" paragraph>
                MyApp is an innovative solution designed to simplify your daily tasks. 
                Explore features that will boost your productivity and enhance your experience.
            </Typography>
            <Typography variant="body1" paragraph>
                Whether you're managing projects, tracking progress, or collaborating with team members, 
                MyApp provides a seamless interface to keep everything organized. 
                No more scattered information - everything you need is in one place!
            </Typography>
            <Typography variant="body1" paragraph>
                We harness the power of cutting-edge technology to ensure that you get the best performance 
                and reliability. Join the thousands of satisfied users who have transformed their routines!
            </Typography>
            <Button variant="contained" color="primary">
                Get Started
            </Button>
        </Container>
    );
};

export default HomePage;