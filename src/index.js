import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import './Section3Assignment/Section3Assignment_App'
//import App from './Section4Assignment/Section4Assignment_App'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App appTitle="Persons Manager" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
