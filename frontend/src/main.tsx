import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css';;
import 'primeicons/primeicons.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider >
    <App />
        </PrimeReactProvider>
  </React.StrictMode>
)
