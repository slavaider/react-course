import axios from 'axios';
import { ActionTypes, NewsActionTypes } from '../../types';
import { API_KEY, API_URL } from '../../../utils/constants';
import { CHANGE_PAGE, GET_DETAILED_NEWS, GET_NEWS } from '../actionTypes';
import { loaderOff, loaderOn } from '../loading-actions/loadingActions';
import { NewsResponse } from '../../../interfaces';
import News from '../../../interfaces/news';

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
    const response = await axios.get(API_URL, {
      params: newOptions,
    });
    dispatch(syncSearchNews(response.data, newOptions));

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
    const response = await axios.get(API_URL, {
      params: { ...options, page: selected + 1 },
    });
    dispatch(syncChangePage(response.data, selected));

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
    const response = await axios.get(API_URL, {
      params: newOptions,
    });
    dispatch(syncGetDetailedNews(response.data.articles[0]));

    dispatch(loaderOff());
  };
};
