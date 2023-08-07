import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';

import { App } from 'components';
import { APIProvider } from 'context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </APIProvider>
  </React.StrictMode>
);
