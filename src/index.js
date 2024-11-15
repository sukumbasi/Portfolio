import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

//service worker
import * as serviceWorker from './serviceworker'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//register service worker
//Changed from 'unregister' to 'register'
// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      serviceWorker.register();
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
