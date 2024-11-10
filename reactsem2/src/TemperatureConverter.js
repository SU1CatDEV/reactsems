import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    setFahrenheit('')
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    setCelsius('')
  };

  function convert() {
    if (celsius === '') {
        const celsiusValue = ((fahrenheit - 32) * 5) / 9;
        setCelsius(celsiusValue ? celsiusValue.toFixed(2) : '');
    } else {
        const fahrenheitValue = (celsius * 9) / 5 + 32;
        setFahrenheit(fahrenheitValue ? fahrenheitValue.toFixed(2) : '');
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Temperature Converter
      </Typography>
      <TextField
        className="celsius"
        label="Celsius"
        variant="outlined"
        value={celsius}
        onChange={handleCelsiusChange}
        fullWidth
        margin="normal"
      />
      <TextField
        className="fahrenheit"
        label="Fahrenheit"
        variant="outlined"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        fullWidth
        margin="normal"
      />
      <Button 
        onClick={convert}
      >AAAAAAAAA</Button>
    </Container>
  );
};

export default TemperatureConverter;
