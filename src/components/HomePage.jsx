import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box } from '@mui/material';
import WeatherTabs from './HourlySlider';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WavesIcon from '@mui/icons-material/Waves';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const HomePage = () => {
  const cityName = 'Krakow';
  const countryName = 'Poland';
  const currentDate = new Date();
  const currentTemperature = 11;
  const minTemperature = 10;
  const maxTemperature = 15;

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
    <Paper sx={{ minHeight: '200vh', backgroundColor: '#171717' }}>
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
        <Grid container spacing={2} sx={{ marginTop: '20px'}}>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                      Sunrise
                    </Typography>
                    <WbSunnyIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    11:30 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                      Sunset
                    </Typography>
                    <WbTwilightIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    6:30 PM
                  </Typography>
                </CardContent>
              </Card>
            </Grid>            
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                        UV Index
                    </Typography>
                    <ThermostatIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>   
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                        Rain Sum
                    </Typography>
                    <WaterDropIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    10 mm
                  </Typography>
                </CardContent>
              </Card>
            </Grid>            
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                        Max Wind Speed
                    </Typography>
                    <AirIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    20 m/s
                  </Typography>
                </CardContent>
              </Card>
            </Grid>            
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: '#1e1e1e', marginBottom: '10px', borderRadius: '10px' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
                        Showers Sum
                    </Typography>
                    <WavesIcon sx={{ fontSize: 48, color: '#fff', marginBottom: '10px' }} />
                  </Box>
                  <Typography variant="body1" sx={{ textAlign: 'center', color: '#fff', fontSize: '24px' }}>
                    15 mm
                  </Typography>
                </CardContent>
              </Card>
            </Grid>            
          </Grid> 
      </Container>
      <WeatherTabs />
    </Paper>
    
  );
};

export default HomePage;
