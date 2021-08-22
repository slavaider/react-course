import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import SearchBar from '../../components/search-bar/SearchBar';
import Loader from '../../components/loader/Loader';
import CardWrapper from '../../components/card-wrapper/CardWrapper';
import withFade from '../../hoc/fade-hoc/WithFade';
import { ILoading, INews } from '../../store/types';
import { News } from '../../interfaces';
import {
  changePage,
  searchNews,
} from '../../store/actions/news-actions/newsActions';

type HomePageProps = {
  loading: boolean;
  length: number;
  news: News[];
  page: number;
  searchNews: (searchData: string, sortBy: string) => void;
  changePage: (obj: { selected: number }) => void;
};

function HomePage(props: HomePageProps) {
  const { news, page, length, loading } = props;
  return (
    <>
      <div className="page-wrapper">
        <SearchBar searchHandler={props.searchNews} />
        {loading ? <Loader /> : <CardWrapper items={news} />}
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
            onPageChange={props.changePage}
          />
        ) : null}
      </div>
    </>
  );
}

function mapStateToProps(state: { loading: ILoading; news: INews }) {
  return {
    loading: state.loading.loading,
    length: state.news.length,
    news: state.news.news,
    page: state.news.page,
  };
}

// eslint-disable-next-line
function mapDispatchToProps(dispatch: any) {
  return {
    changePage: (obj: { selected: number }) => dispatch(changePage(obj)),
    searchNews: (searchData: string, sortBy: string) =>
      dispatch(searchNews(searchData, sortBy)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withFade(HomePage));
