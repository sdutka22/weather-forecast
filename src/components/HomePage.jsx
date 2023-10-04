import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Paper, Grid } from '@mui/material';

const HomePage = () => {
  const cityName = 'Krakow'; // Zmień na odpowiednie dane
  const countryName = 'Poland'; // Zmień na odpowiednie dane
  const currentDate = new Date();
  const currentTemperature = 11;
  const minTemperature = 10;
  const maxTemperature = 15; // Zmień na odpowiednie dane

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(currentDate);

  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#171717' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
          {cityName}, {countryName}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#fff', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
        {formattedDate}
        </Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={2}  sx={{ marginTop: '60px', marginBottom: '30px' }}>
            <Grid item xs={12}>
              <Typography variant='h1' sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif'}}>
                {currentTemperature}°C
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '40px', paddingRight: '20px', display: 'flex', justifyContent: 'flex-end'}}>
              <Typography variant='h6' sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Min: {minTemperature}°C
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '40px', paddingLeft: '20px' , display: 'flex', justifyContent: 'flex-start' }}>
              <Typography variant='h6' sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Max: {maxTemperature}°C
              </Typography>
            </Grid>
        </Grid>
        <Paper  sx={{ padding: '20px', backgroundColor: '#1e1e1e' }}>
        </Paper>
      </Container>
    </Paper>
  );
};

export default HomePage;
