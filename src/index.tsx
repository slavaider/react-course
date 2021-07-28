import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import img from './assets/img/test.jpg';

const App = () => (
  <>
    <img src={img} alt="img" />
    <h1>My React and TypeScript App!! {new Date().toLocaleDateString()}</h1>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
