import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Default, Red, Blue, Green} from './components/colors'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    
    <BrowserRouter>
    <App />
      <Routes>
        <Route path="/" element={<Default />}/>
        <Route path="red" element={<Red />}/>
        <Route path="green" element={<Green />}/>
        <Route path="blue" element={<Blue />}/>
      </Routes>
    </BrowserRouter>
    </>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
