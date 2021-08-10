import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import 'bootstrap/dist/js/bootstrap.min';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
