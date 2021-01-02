import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import SimpleHeader  from './layouts/simple/SimpleHeader'
import './App.css';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SimpleHeader />
      </div>
    </ThemeProvider>
  );
}

export default App;
