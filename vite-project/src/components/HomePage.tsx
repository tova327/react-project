import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to the Recipe World!
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Discover delicious recipes from around the globe.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
        Get Started
      </Button>
    </Box>
  );
};

export default HomePage;