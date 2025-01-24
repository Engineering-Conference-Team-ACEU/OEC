import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'; // Optional, if you have global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure this matches the ID in index.html
);
