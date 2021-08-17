import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';
import { ILoading, INews } from '../../store/types';
import { getDetailedNews } from '../../store/actions/newsActions';
import News from '../../interfaces/news';

interface DetailsPageProps extends RouteComponentProps<{ title: string }> {
  loading: boolean;
  detailedNews?: News;
  getDetailedNews: (arg0: string) => void;
}

function DetailsPage(props: DetailsPageProps) {
  const { title } = props.match.params;
  const { loading, detailedNews } = props;

  useEffect(() => {
    props.getDetailedNews(title);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {detailedNews ? (
            <Card news={detailedNews} details={true} />
          ) : (
            <h1 className="text-white text-center mt-2">Data not found</h1>
          )}
        </>
      )}
    </>
  );
}

function mapStateToProps(state: { loading: ILoading; news: INews }) {
  return {
    loading: state.loading.loading,
    detailedNews: state.news.detailedNews,
  };
}

// eslint-disable-next-line
function mapDispatchToProps(dispatch: any) {
  return {
    getDetailedNews: (title: string) => dispatch(getDetailedNews(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
