import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="SearchBar">
      <input className="SearchBar_input" type="text" placeholder="Search..." />
      <a href="#" className="SearchBar_icon">
        <i className="fas fa-search" />
      </a>
    </div>
  );
};

export default SearchBar;
