import React, { useState } from 'react';
import Navbar from './Navbar';
import { Container, Typography, Paper, Grid, Card, CardContent, Box } from '@mui/material';
import WeatherTabs from './HourlySlider';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WavesIcon from '@mui/icons-material/Waves';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WeatherComponent from './WeatherComponent';

const HomePage = () => {
  const cityName = 'Krakow';
  const countryName = 'Poland';
  const currentDate = new Date();
  const [dates, setDates] = useState([]);
  const [hourlyDataForDates, setHourlyDataForDates] = useState([]);
  const [dailyDataForDates, setDailyDataForDates] = useState([]);

  const {  weatherData, getDailyDataByDate, TodayWeatherdata, getHourlyDataByDate } = WeatherComponent();

  const handleDatesUpdate = (updatedDates) => {
    setDates(updatedDates);

    const hourlyDataObjects = updatedDates.map((date) => {
      const hourlyData = getHourlyDataByDate(date);
      
      return { date, hourlyData };
    });

    setHourlyDataForDates(hourlyDataObjects);


    const dailyDateObjects = updatedDates.map((date) => {
      const dailyData = getDailyDataByDate(date);
      
      return { date, dailyData };
    });

    setDailyDataForDates(dailyDateObjects)
  };

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
      {weatherData && (
        <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
          <Typography variant="h2" sx={{ color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
            {cityName}, {countryName}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#fff', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
            {formattedDate}
          </Typography>
          <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '60px', marginBottom: '30px' }}>
            <Grid item xs={12}>
              <Typography variant="h1" sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                {TodayWeatherdata.temperature2mMax}°C
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '40px', paddingRight: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Min: {TodayWeatherdata.temperature2mMin}°C
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: '40px', paddingLeft: '20px', display: 'flex', justifyContent: 'flex-start' }}>
              <Typography variant="h6" sx={{ color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Max: {TodayWeatherdata.temperature2mMax}°C
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ marginTop: '20px' }}>
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
                    {TodayWeatherdata.sunrise.split("T")[1]}
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
                    {TodayWeatherdata.sunset.split("T")[1]}
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
                    {TodayWeatherdata.uvIndexMax}
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
                    {TodayWeatherdata.rainSum} mm
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
                    {TodayWeatherdata.windspeed10mMax} m/s
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
                    {TodayWeatherdata.showersSum} mm
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <WeatherTabs Hourlydate={hourlyDataForDates} dailyDataByDay={dailyDataForDates} onDatesUpdate={handleDatesUpdate} />
        </Container>
      )}
    </Paper>
  );
};

export default HomePage;
