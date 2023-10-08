import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#171717' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
          About Us
        </Typography>
        <Typography variant="h6" paragraph sx={{ color: '#fff', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
          Witamy w naszej aplikacji pogodowej! Jesteśmy zespołem pasjonatów, którzy pragną dostarczać Ci najświeższe i najważniejsze informacje dotyczące pogody. Nasza misja polega na zapewnieniu Ci łatwego dostępu do prognoz, byś zawsze był przygotowany na zmienne warunki atmosferyczne.
        </Typography>
      </Container>
    </Paper>
  );
};

export default AboutUsPage;
