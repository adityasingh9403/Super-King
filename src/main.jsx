import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // इसे इम्पोर्ट करें

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* App को इससे रैप करें */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);