import express from 'express';
import 'ignore-styles';
import React from 'react';
import cors from 'cors';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './components/app/App';
import store from './store/store';

const app = express();

app.use(cors());
app.use(express.static('dist'));

const PORT = process.env.PORT || 3000;

function renderHTML(componentHTML: string) {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="utf-8">
           <link rel="icon" href="assets/img/favicon.ico">
           <script src="https://kit.fontawesome.com/af9c927aab.js" crossorigin="anonymous"></script>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>SSRt</title>
          <link rel="stylesheet" href="/css/bundle.css">
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <script defer src="/bundle.js"></script>
      </body>
    </html>
  `;
}

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>,
  );
  return res.end(renderHTML(componentHTML));
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
  console.log('Please wait for building project...');
});
