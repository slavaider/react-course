import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsApi from '../../libs/NewsApi';
import { API_KEY } from '../../utils/constants';
import Loader from '../../components/loader/Loader';
import { News } from '../../interfaces';
import Card from '../../components/card/Card';

type RouterParams = {
  title: string;
};

const DetailsPage: React.FC = () => {
  const { title } = useParams<RouterParams>();
  const [news, setNews] = useState<News | undefined>(undefined);
  const [loader, setLoading] = useState<boolean>(false);
  const newsApi = new NewsApi();

  async function getNews(searchData: string) {
    const newOptions = {
      apiKey: API_KEY,
      qInTitle: searchData,
    };
    return newsApi.getNews({ parameters: newOptions });
  }

  useEffect(() => {
    setLoading(false);
    getNews(title).then((data) => {
      setNews(data.articles[0]);
      setLoading(true);
    });
  }, []);

  return (
    <>
      {loader ? (
        <>
          {news ? (
            <Card item={news} details={true} />
          ) : (
            <h1 className="text-white text-center mt-2">Data not found</h1>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DetailsPage;
