import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './theme'
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainLayout>
          HOME PAGE 
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
