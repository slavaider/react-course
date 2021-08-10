import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import AboutPage from '../../pages/about-page/AboutPage';
import HomePage from '../../pages/home-page/HomePage';
import ErrorPage from '../../pages/error-page/ErrorPage';
import Header from '../header/Header';
import DetailsPage from '../../pages/details-page/DetailsPage';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
