import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Use REDUX to create the store of STATE objects / items, and use
// `combineReducers` to pull together multiple STATE values into a
// single object
import { createStore, combineReducers, applyMiddleware } from 'redux'

// Import the provider to the REDUX store.
// This will allow access to our STATE throughout the App
import { Provider } from "react-redux"

// Used to log the REDUX values and changes to STATE in console.log()
import logger from 'redux-logger'

// Create the main STORE that will serve all STATE values throughout our App
const store = createStore(
    combineReducers({
        // Contains each of the individual STATE items that we want access to
    }),
    applyMiddleware(logger)
)
 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
