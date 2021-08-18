import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import AboutPage from '../../pages/about-page/AboutPage';
import HomePage from '../../pages/home-page/HomePage';
import ErrorPage from '../../pages/error-page/ErrorPage';
import Header from '../header/Header';
import DetailsPage from '../../pages/details-page/DetailsPage';
import store from '../../store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="container mt-1">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/details/:title" component={DetailsPage} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
