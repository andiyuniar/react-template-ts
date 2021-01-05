import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './theme'
import MainLayout from './layouts/MainLayout';
import SimpleLayout from './layouts/SimpleLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SimpleLayout>
          LOGIN PAGE 
        </SimpleLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
