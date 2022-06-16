// Import the core libraries used
import React from 'react';
import axios from 'axios';

import CustomerInfo from '../CustomerInfo/CustomerInfo'

// Import the Router to allow for linking throughout out App.jsx project
// and Route to link to specific pages
import { Route, HashRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// Import the components used in App.jsx
import Checkout from '../Checkout/Checkout';

// Import the stylesheets
import './App.css';

function App() {

  
  useEffect(() => {
    console.log('in useEffect');
    getPizzaList()
  },[])

  const dispatch = useDispatch();
  
  const getPizzaList = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
    .then((response) => {
      dispatch({
        type: 'GET_PIZZA',
        payload: response.data
      })
    })
      .catch((err) => {
        console.log('Err in GET', err);
    })
  }
   

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
    
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
    
        <Route path="/checkout" exact>
          <Checkout />
        </Route>

      <CustomerInfo/>

      </div>
    </Router>
  );
}

export default App;
