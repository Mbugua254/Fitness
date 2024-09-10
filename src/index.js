import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Import the stylesheet
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
