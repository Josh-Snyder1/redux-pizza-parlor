import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerInfo from '../CustomerInfo/CustomerInfo'

// Import the Router to allow for linking throughout out App.jsx project
// and Route to link to specific pages
import { Route, HashRouter as Router } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
      <CustomerInfo/>
      </div>
    </Router>
  );
}

export default App;
