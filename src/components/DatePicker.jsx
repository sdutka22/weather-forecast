import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Alert, IconButton, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';
import { Api } from '@mui/icons-material';

const WeatherPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hourlyDataForDates, setHourlyDataForDates] = useState(null);
  const [dailyDataForDates, setDailyDataForDates] = useState(null);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    // Tutaj dodaj kod do pobrania prognozy pogody dla wybranej daty z API
    // W przykładowym kodzie zakładamy, że masz funkcję getWeatherData, która zwraca prognozę dla danej daty
    const data = getWeatherData(selectedDate);
    setWeatherData(data);
  };

  const getWeatherData = (selectedDate) => {
    // Tutaj symulujemy pobieranie danych z API. W rzeczywistości, użyj swojego API lub serwisu do prognozy pogody
    // Przykładowe dane:
    return {
      temperature: 25,
      humidity: 60,
      windSpeed: 10,
      // Dodaj inne informacje o pogodzie
    };
  };

  const {  weatherData, getDailyDataByDate, TodayWeatherdata, getHourlyDataByDate } = WeatherComponent();

  setHourlyDataForDates(hourlyDataObjects);
  setDailyDataForDates(dailyDateObjects);

  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#fff', position: 'relative' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#000', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
          Wybierz datę
        </Typography>

        <TextField
          type="date"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleDateChange}
        />

        {selectedDate && (
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h4" sx={{ color: '#000', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
              Prognoza pogody na {selectedDate}
            </Typography>

            {weatherData ? (
              <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Pogoda</TableCell>
                      <TableCell>Temperatura (°C)</TableCell>
                      <TableCell>Wilgotność (%)</TableCell>
                      <TableCell>Prędkość wiatru (m/s)</TableCell>
                      {/* Dodaj inne kolumny */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>...</TableCell>
                      <TableCell>{weatherData.temperature}</TableCell>
                      <TableCell>{weatherData.humidity}</TableCell>
                      <TableCell>{weatherData.windSpeed}</TableCell>
                      {/* Dodaj inne komórki */}
                    </TableRow>
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
