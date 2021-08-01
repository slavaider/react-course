import React, { useState } from 'react';
import './App.scss';
import ReactPaginate from 'react-paginate';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore  '@types/newsapi@*' is not in the npm registry.
import NewsAPI from 'newsapi';
import CardWrapper from '../card-wrapper/CardWrapper';
import SearchBar from '../search-bar/SearchBar';
import { News } from '../../interfaces';
import { API_KEY } from '../../utils/constants';
import Loader from '../loader/Loader';

const App: React.FC = () => {
  const [news, setNews] = useState<Array<News>>([]);
  const [loader, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
  const [options, setOptions] = useState<Record<string, unknown>>({});
  const [page, setPage] = useState<number>(0);

  const newsapi = new NewsAPI(API_KEY, {
    corsProxyUrl: 'https://cors-anywhere.herokuapp.com/',
  });

  async function searchNews(searchData: string, sortBy: string) {
    setLoading(true);
    const newOptions = {
      apiKey: API_KEY,
      q: searchData,
      qInTitle: searchData,
      sortBy,
    };

    // Can use this on dev, because it ignore cors on deploy
    // import NewsApi from '../../libs/NewsApi';
    // const newsApi = new NewsApi();
    // const data = newsApi.getNews(newOptions);
    const data = await newsapi.v2.everything(newOptions);

    setPage(0);
    setOptions(newOptions);
    setLength(Math.ceil(data.totalResults / 20));
    setNews(data.articles);
    setLoading(false);
  }

  async function changePage({ selected }: { selected: number }) {
    setLoading(true);
    const newOptions = { ...options, page: selected + 1 };
    const data = await newsapi.v2.everything(newOptions);

    setPage(selected);
    setNews(data.articles);
    setLoading(false);
  }

  return (
    <div className="App container">
      <SearchBar searchHandler={searchNews} />
      {loader ? <Loader /> : <CardWrapper items={news} />}
      {news.length > 0 ? (
        <ReactPaginate
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          activeClassName={'active'}
          // Prev
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          previousLabel={'<'}
          // Next
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          nextLabel={'>'}
          // Break
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          breakLabel={'...'}
          // Count if > 5 pages -> pay money to api -_-
          pageCount={length > 5 ? 5 : length}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          forcePage={page}
          // Actions
          onPageChange={changePage}
        />
      ) : null}
    </div>
  );
};

export default App;
