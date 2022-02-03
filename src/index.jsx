import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './style.css';
ReactDOM.render(
  <React.StrictMode>
    <Fragment>
    <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('eponce')
);
