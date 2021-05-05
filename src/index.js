import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode/*严格模式*/>
    <App />
  </React.StrictMode>,
  document.getElementById('root') /*渲染到root中*/
);
