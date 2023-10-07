import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Paper, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Card } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const WeatherTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [hourlyData, setHourlyData] = useState([]);

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,precipitation,surface_pressure,cloudcover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,rain_sum,showers_sum,windspeed_10m_max&timezone=Europe%2FBerlin&forecast_days=16');
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
  
        const hourlyForecast = data.hourly;
  
        console.log('Hourly Forecast Data:', hourlyForecast);
        setHourlyData(Array.isArray(hourlyForecast) ? hourlyForecast : []);
        console.log('Hourly Data:', hourlyData);
  
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
  };  

  const tabsData = [
    { label: 'Dzisiaj', temperature: 20, precipitation: 0 },
    { label: 'Jutro', temperature: 25, precipitation: 8 },
    { label: 'Pojutrze', temperature: 22, precipitation: 3 },
  ];

  const chooseWeatherIcon = (precipitation) => {
    if (precipitation === 0) {
      return <WbSunnyIcon />;
    } else if (precipitation < 5) {
      return <CloudIcon />;
    } else {
      return <WaterDropIcon />;
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
      <Paper sx={{ minHeight: '200vh', backgroundColor: '#171717' }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          {tabsData.map((tab, index) => (
            <Tab key={index} label={
              <Card sx={{ width: '150px', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D4D4D2' }}>
                <Box sx={{ paddingLeft: '10px' }}>
                    {chooseWeatherIcon(tab.precipitation)}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Typography variant="h6" sx={{ color: 'black', marginBottom: '5px', paddingRight: '10px', fontFamily: 'Poppins, sans-serif' }}>
                    {tab.temperature}°C
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'black', paddingRight: '10px', fontFamily: 'Poppins, sans-serif' }}>
                    {tab.label}
                  </Typography>
                </Box>
              </Card>
            } />
          ))}
        </Tabs>
        <Box sx={{ marginTop: '20px' }}>
            {selectedTab >= 0 && (
                <TableContainer component={Paper} sx={{ backgroundColor: '#D4D4D2' }}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Godzina</TableCell>
                        <TableCell>Temperatura (°C)</TableCell>
                        <TableCell>Opady (mm)</TableCell>
                        <TableCell>Szansa opadów (%)</TableCell>
                        <TableCell>Zachmurzenie</TableCell>
                        <TableCell>Ciśnienie (hPa)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {hourlyData.map((hourlyEntry, index) => (
                            <TableRow key={index}>
                                {/* Adjust property names according to the actual structure of hourly data */}
                                <TableCell>{hourlyEntry.cloudcover}</TableCell>
                                <TableCell>{hourlyEntry.precipitation}</TableCell>
                                <TableCell>{hourlyEntry.precipitation_probability}</TableCell>
                                <TableCell>{hourlyEntry.temperature_2m}</TableCell>
                                <TableCell>{new Date(hourlyEntry.timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            )}
        </Box>
      </Paper>
    </Container>
  );
};

export default WeatherTabs;
