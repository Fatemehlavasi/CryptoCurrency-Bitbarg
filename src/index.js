import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {Theme} from "./theme/Tehem"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={Theme} >
        <CssBaseline>
          <App />
        </CssBaseline>  
    </ThemeProvider>
      

);

