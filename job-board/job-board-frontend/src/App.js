import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

const App = () => {
  return (
    <div>
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <BrowserRouter>     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes> 
      </BrowserRouter>
      </ThemeProvider>
      </>
    </div>
  )
}

export default App
