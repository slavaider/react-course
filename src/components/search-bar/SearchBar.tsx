import React, { FormEvent } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  searchHandler: (searchData: string, sortBy: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchHandler,
}: SearchBarProps) => {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const searchData = (event.target as HTMLFormElement).search.value;
    const sortData = (event.target as HTMLFormElement).sort.value;

    searchHandler(searchData, sortData);
  }

  return (
    <div className="SearchBar row">
      <div className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">
            <p className="text-white">Sort:</p>
            <select
              name="sort"
              className="form-select"
              defaultValue="publishedAt"
            >
              <option value="publishedAt">Published</option>
              <option value="popularity">Popularity</option>
              <option value="relevancy">Relevancy</option>
            </select>
          </label>
          <div className="search-wrapper">
            <input
              className="form-control"
              name="search"
              required
              type="search"
              placeholder="Search..."
            />
            <button className="search_icon" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
