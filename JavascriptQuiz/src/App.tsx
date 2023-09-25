import React from 'react';
import { Typography, Stack } from '@mui/material';
import './App.css';
import { JavaScriptLogo } from './JavaScriptLogo';
import { Start } from './Start';

function App() {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <JavaScriptLogo />
        <Typography variant="h2" component="h1">
          JavaScript Quiz
        </Typography>
      </Stack>

      <Start />
    </React.Fragment>
  );
}

export default App;
