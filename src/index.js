import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'
import Library from './chapter_03/Library';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
  <React.StrictMode>
    <Clock/>
  </React.StrictMode>
  );
}, 1000)

// App, Library.jsx
// root.render(
//   <React.StrictMode>
//     <App />
//     <Hello toWhat="World"/>
//     <Library/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
