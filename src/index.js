import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "animate.css/animate.min.css";
import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

