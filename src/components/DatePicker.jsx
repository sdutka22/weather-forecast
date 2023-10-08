import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Alert, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, useMediaQuery } from '@mui/material';
import Navbar from './Navbar';
import WeatherComponent from './WeatherComponent';

const WeatherPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hourlyDataForDate, setHourlyDataForDate] = useState([]);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const { weatherData, getHourlyDataByDate } = WeatherComponent();

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    const targetDate = new Date(selectedDate);

    const hourlyData = getHourlyDataByDate(targetDate);

    setHourlyDataForDate(hourlyData);
  };

  const formattedDate = new Date(selectedDate).toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#171717', position: 'relative' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#fff', marginBottom: '40px', fontFamily: 'Poppins, sans-serif' }}>
          Wybierz datę
        </Typography>

        <TextField
          type="date"
          variant="filled"
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDateChange}
          sx={{
            backgroundColor: '#fff',
            margin: '20px auto',
            textAlign: 'center',
          }}
        />

        {selectedDate && (
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant={isSmallScreen ? 'h4' : 'h3'} sx={{ color: '#fff', marginTop: '30px', fontFamily: 'Poppins, sans-serif' }}>
              Prognoza pogody na {formattedDate}
            </Typography>

            {weatherData ? (
              <TableContainer component={Paper} sx={{ marginTop: '60px', overflowX: 'auto' }}>
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
                    {hourlyDataForDate.map((hourlyEntry) => (
                      <TableRow key={hourlyEntry.formattedTime}>
                        <TableCell>{hourlyEntry.formattedTime}</TableCell>
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
              <Alert severity="info" sx={{ marginTop: '20px' }}>
                Wybierz datę, aby zobaczyć prognozę pogody.
              </Alert>
            )}
          </Box>
        )}
      </Container>
    </Paper>
  );
};

export default WeatherPage;
