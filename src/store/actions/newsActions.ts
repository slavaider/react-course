import { ActionTypes, NewsActionTypes } from '../types';
import { API_KEY } from '../../utils/constants';
import { CHANGE_PAGE, GET_DETAILED_NEWS, GET_NEWS } from './actionTypes';
import { loaderOff, loaderOn } from './loadingActions';
import NewsApi from '../../libs/NewsApi';
import { NewsResponse } from '../../interfaces';
import News from '../../interfaces/news';

const newsApi = new NewsApi();

export const syncSearchNews = (
  data: NewsResponse,
  newOptions: Record<string, unknown>,
): NewsActionTypes => {
  return {
    type: GET_NEWS,
    payload: {
      page: 0,
      options: newOptions,
      length: Math.ceil(data.totalResults / 20),
      news: data.articles,
    },
  };
};

export const syncChangePage = (
  data: NewsResponse,
  page: number,
): NewsActionTypes => {
  return {
    type: CHANGE_PAGE,
    payload: {
      news: data.articles,
      page,
    },
  };
};
export const syncGetDetailedNews = (
  data: News | undefined,
): NewsActionTypes => {
  return {
    type: GET_DETAILED_NEWS,
    payload: {
      detailedNews: data,
    },
  };
};

export const searchNews = (searchData: string, sortBy: string) => {
  return async (dispatch: (arg0: ActionTypes) => void): Promise<void> => {
    dispatch(loaderOn());

    const newOptions = {
      apiKey: API_KEY,
      q: searchData,
      qInTitle: searchData,
      sortBy,
    };
    const data = await newsApi.getNews({ parameters: newOptions });
    dispatch(syncSearchNews(data, newOptions));

    dispatch(loaderOff());
  };
};

export const changePage = ({ selected }: { selected: number }) => {
  return async (
    dispatch: (arg0: ActionTypes) => void,
    getState: () => { news: { options: Record<string, unknown> } },
  ): Promise<void> => {
    dispatch(loaderOn());

    const state = getState();
    const { options } = state.news;
    const data = await newsApi.getNews({
      parameters: { ...options, page: selected + 1 },
    });
    dispatch(syncChangePage(data, selected));

    dispatch(loaderOff());
  };
};

export const getDetailedNews = (title: string) => {
  return async (dispatch: (arg0: ActionTypes) => void): Promise<void> => {
    dispatch(loaderOn());

    const newOptions = {
      apiKey: API_KEY,
      qInTitle: title,
    };
    const data = await newsApi.getNews({ parameters: newOptions });
    dispatch(syncGetDetailedNews(data.articles[0]));

    dispatch(loaderOff());
  };
};
