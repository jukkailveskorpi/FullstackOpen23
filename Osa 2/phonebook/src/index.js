import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const persons = [
  {
    id: 1,
    name: 'Bill Gates',
    number: '0507263444'
  },
  {
    id: 2,
    name: 'Dan Abramov',
    number: '0501163444'
  },
  {
    id: 3,
    name: 'Steven Jobs',
    number: '0507263554'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App persons={persons} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
