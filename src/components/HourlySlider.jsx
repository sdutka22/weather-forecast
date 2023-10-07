// Importy
import React, { useState } from 'react';
import { Container, Tabs, Tab, Paper, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Card } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

// Komponent WeatherTabs
const WeatherTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Function to generate sample hourly data
  const generateHourlyData = () => {
    const hourlyData = [];
    for (let i = 0; i < 24; i++) {
      hourlyData.push({
        godzina: `${i}:00`,
        temperatura: getRandomNumber(10, 30),
        opady: getRandomNumber(0, 5),
        szansaOpadow: getRandomNumber(0, 100),
        zachmurzenie: getRandomNumber(0, 100),
        cisnienie: getRandomNumber(980, 1030),
      });
    }
    return hourlyData;
  };
  
  // Helper function to get a random number in a given range
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const tabsData = [
    { label: 'Dzisiaj', temperature: 20, precipitation: 0, hourlyData: [] },
    { label: 'Jutro', temperature: 25, precipitation: 8, hourlyData: [] },
    { label: 'Pojutrze', temperature: 22, precipitation: 3, hourlyData: [] },
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
            <TableContainer component={Paper} sx={{backgroundColor: '#D4D4D2'}}>
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
                  {tabsData[selectedTab].hourlyData.map((hourlyData, index) => (
                    <TableRow key={index}>
                      <TableCell>{hourlyData.godzina}</TableCell>
                      <TableCell>{hourlyData.temperatura}</TableCell>
                      <TableCell>{hourlyData.opady}</TableCell>
                      <TableCell>{hourlyData.szansaOpadow}</TableCell>
                      <TableCell>{hourlyData.zachmurzenie}</TableCell>
                      <TableCell>{hourlyData.cisnienie}</TableCell>
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
