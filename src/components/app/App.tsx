import React from 'react';
import CardWrapper from '../card-wrapper/CardWrapper';
import SearchBar from '../search-bar/SearchBar';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App container">
      <SearchBar />
      <CardWrapper />
    </div>
  );
};

export default App;
