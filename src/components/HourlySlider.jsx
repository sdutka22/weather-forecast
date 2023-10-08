import React, { useState, useEffect } from 'react';
import { isToday, isTomorrow, addDays } from 'date-fns';
import { Container, Tabs, Tab, Paper, Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Card } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const WeatherTabs = ({ Hourlydate, dailyDataByDay, onDatesUpdate }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [dates, setDates] = useState([]);

    useEffect(() => {
      const currentDate = new Date();
      const tomorrowDate = new Date();
      tomorrowDate.setDate(currentDate.getDate() + 1);
      const dayAfterTomorrowDate = new Date();
      dayAfterTomorrowDate.setDate(currentDate.getDate() + 2);
    
      // Sprawdź, czy daty się różnią przed aktualizacją stanu
      if (
          dates[0]?.getTime() !== currentDate.getTime() ||
          dates[1]?.getTime() !== tomorrowDate.getTime() ||
          dates[2]?.getTime() !== dayAfterTomorrowDate.getTime()
      ) {
          onDatesUpdate([currentDate, tomorrowDate, dayAfterTomorrowDate]);
      }
    }, []);

    useEffect(() => {
      const currentDate = new Date();
      let initialTab = 0;
    
      if (isTomorrow(currentDate)) {
        initialTab = 1;
      } else if (!isToday(currentDate)) {
        initialTab = 2;
      }
    
      setSelectedTab(initialTab);
    }, []);  

    const tabsData = [
      {
        label: 'Dzisiaj',
        temperature: dailyDataByDay[0]?.dailyData.temperature2mMax,
        precipitation: dailyDataByDay[0]?.dailyData.precipitation_probability_max,
      },
      {
        label: 'Jutro',
        temperature: dailyDataByDay[1]?.dailyData.temperature2mMax,
        precipitation: dailyDataByDay[1]?.dailyData.precipitation_probability_max,
      },
      {
        label: 'Pojutrze',
        temperature: dailyDataByDay[2]?.dailyData.temperature2mMax,
        precipitation: dailyDataByDay[2]?.dailyData.precipitation_probability_max,
      },
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
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)} centered>
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
            {selectedTab >= 0 && Array.isArray(Hourlydate[selectedTab]?.hourlyData) ? (
                <TableContainer component={Paper} sx={{ backgroundColor: '#D4D4D2' }}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Timestamp</TableCell>
                        <TableCell>Temperature (°C)</TableCell>
                        <TableCell>Precipitation (mm)</TableCell>
                        <TableCell>Precipitation Probability (%)</TableCell>
                        <TableCell>Cloud Cover</TableCell>
                        <TableCell>Surface Pressure (hPa)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(Hourlydate[selectedTab].hourlyData || []).map((hourlyEntry, index) => (
                        <TableRow key={index}>
                            <TableCell>{hourlyEntry.formattedTime.split(' ')[1]}</TableCell>
                            <TableCell>{hourlyEntry.temperature2m}</TableCell>
                            <TableCell>{hourlyEntry.precipitation}</TableCell>
                            <TableCell>{hourlyEntry.precipitationProbability}</TableCell>
                            <TableCell>{hourlyEntry.cloudcover}</TableCell>
                            <TableCell>{hourlyEntry.surfacePressure}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                ) : (
                <Box sx={{ marginTop: '20px', color: 'white' }}>
                    No data available
                </Box>
            )}
        </Box>
      </Paper>
    </Container>
  );
};

export default WeatherTabs;
