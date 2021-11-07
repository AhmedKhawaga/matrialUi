import Header from './ui/Header';
import React from 'react'
import {ThemeProvider } from '@mui/material';
import theme from './ui/Theme'
function App() {
  return (
   <ThemeProvider theme={theme}>
   <Header/>
   </ThemeProvider>
  );
}

export default App;
