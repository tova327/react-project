import { Container, Theme, Typography, Box } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import React from 'react';

// Custom styles using MUI's styled API
const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(4),
}));

const Heading = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    lineHeight: 1.6,
}));

const AboutPage: React.FC = () => {
    const theme: Theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: theme.spacing(2),
            }}
        >
            <CustomContainer>
                <Heading variant="h3"  gutterBottom>
                    About MyApp
                </Heading>
                <Paragraph variant="body1" paragraph>
                    MyApp was created to help users streamline their workflows and manage tasks efficiently. 
                    Our team is dedicated to providing the best user experience with continuous improvements.
                </Paragraph>
                <Paragraph variant="body1" paragraph>
                    Founded by a group of passionate professionals, we understand the struggles that come with 
                    managing multiple tasks in an increasingly busy world. Our mission is to empower users with 
                    useful features that foster productivity and collaboration.
                </Paragraph>
                <Paragraph variant="body1" paragraph>
                    We believe in constant innovation and user feedback to make our application even better. 
                    Your satisfaction is our priority, and we are committed to delivering updates that make your 
                    experience as smooth as possible.
                </Paragraph>
            </CustomContainer>
        </Box>
    );
};

export default AboutPage;

