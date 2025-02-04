import { Container, Typography } from '@mui/material';

const AboutPage = () => {
    return (
        <Container>
            <Typography variant="h3" component="h1" gutterBottom>
                About MyApp
            </Typography>
            <Typography variant="body1" paragraph>
                MyApp was created to help users streamline their workflows and manage tasks efficiently. 
                Our team is dedicated to providing the best user experience with continuous improvements.
            </Typography>
            <Typography variant="body1" paragraph>
                Founded by a group of passionate professionals, we understand the struggles that come with 
                managing multiple tasks in an increasingly busy world. Our mission is to empower users with 
                useful features that foster productivity and collaboration.
            </Typography>
            <Typography variant="body1" paragraph>
                We believe in constant innovation and user feedback to make our application even better. 
                Your satisfaction is our priority, and we are committed to delivering updates that make your 
                experience as smooth as possible.
            </Typography>
        </Container>
    );
};

export default AboutPage;