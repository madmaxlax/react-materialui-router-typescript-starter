import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './assets/css/index.css';
import ScrollToTop from './components/ScrollToTop';
import Routing from './Routing';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

const Router = process.env.USE_BROWSER_ROUTER?.toLowerCase() === 'true' ? HashRouter : BrowserRouter;

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <ScrollToTop />
      <Routing />
    </Router>
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
