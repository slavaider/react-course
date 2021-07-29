import React from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="SearchBar">
      <div className="searchbar">
        <input className="search_input" type="text" placeholder="Search..." />
        <a href="#" className="search_icon">
          <i className="fas fa-search" />
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
