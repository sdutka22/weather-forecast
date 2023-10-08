import React, { useState } from 'react';
import { Container, Typography, Paper, Box, TextField, Button, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';

const ContactPage = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const handleAlertClose = () => {
    setSubmitted(false);
  };

  return (
    <Paper sx={{ minHeight: '100vh', backgroundColor: '#171717', position: 'relative' }}>
      <Navbar />
      <Container maxWidth="md" sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#fff', marginBottom: '10px', fontFamily: 'Poppins, sans-serif' }}>
          Kontakt
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#fff', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>
          Masz pytania, sugestie lub chciałbyś się z nami skontaktować? Wypełnij poniższy formularz, a my postaramy się odpowiedzieć jak najszybciej.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& .MuiOutlinedInput-root': { backgroundColor: '#fff' } }}>
            <TextField
              label="Imię i Nazwisko"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Adres Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Wiadomość"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, backgroundColor: '#D46935', color: '#fff' }}
          >
            Wyślij
          </Button>
        </form>
      </Container>

      {isSubmitted && (
        <Alert
          severity="success"
          sx={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            zIndex: 1,
            textAlign: 'left', // Przesunięcie tekstu na lewą stronę
            maxWidth: '300px', // Dostosuj szerokość alertu
            color: '#fff', // Kolor tekstu
          }}
          action={
            <IconButton
              color="inherit"
              size="small"
              aria-label="close"
              onClick={handleAlertClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Dziękujemy za kontakt! Odpowiemy jak najszybciej.
        </Alert>
      )}
    </Paper>
  );
};

export default ContactPage;
