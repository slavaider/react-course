import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import 'bootstrap/dist/js/bootstrap.min';
import store from './store/store';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
