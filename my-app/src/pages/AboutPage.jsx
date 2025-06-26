import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography paragraph>
            We are dedicated to providing innovative solutions and exceptional service to our customers. 
            Our goal is to make a positive impact in the industry through technology and collaboration.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography paragraph>
            Founded in 2024, we started with a simple idea: to create something meaningful that helps people. 
            Since then, we've grown into a team of passionate individuals working together to achieve our common goals.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <Typography component="ul" sx={{ pl: 2 }}>
            <li>Innovation and Creativity</li>
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Improvement</li>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutPage;
