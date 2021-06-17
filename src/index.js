import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Parentprovider} from './components/parentprovider'
import { createStore } from 'redux';
import themereducer from './components/reducers/themereducer';
const store=createStore(themereducer)
ReactDOM.render(
  <React.StrictMode>
    <Parentprovider>
    <App />
    </Parentprovider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
