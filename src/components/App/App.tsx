import React from 'react';
import CardWrapper from '../CardWrapper';
import SearchBar from '../SearchBar';
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
