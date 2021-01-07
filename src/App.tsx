import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
// import './App.css';
import theme from './theme'

import MainLayout from './layouts/MainLayout';
import SimpleLayout from './layouts/SimpleLayout';
import AppRoute from './routes/index';
import Login from './views/authentication/Login';
import Home from './views/home/Index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <AppRoute path='/login' layout={SimpleLayout} component={Login} />
          <AppRoute path='/' layout={MainLayout} component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
