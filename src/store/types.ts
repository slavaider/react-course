import {
  CHANGE_PAGE,
  GET_DETAILED_NEWS,
  GET_NEWS,
  LOADING_OFF,
  LOADING_ON,
} from './actions/actionTypes';
import { News } from '../interfaces';

// Store

export interface ILoading {
  loading: boolean;
}

export interface INews {
  news: News[];
  length: number;
  options: Record<string, unknown>;
  page: number;
  detailedNews: News | undefined;
}

// Actions

interface ILoadingOff {
  type: typeof LOADING_OFF;
}

interface ILoadingOn {
  type: typeof LOADING_ON;
}

interface ISearchNews {
  type: typeof GET_NEWS;
  payload: Partial<INews>;
}

interface IChangePage {
  type: typeof CHANGE_PAGE;
  payload: Partial<INews>;
}

interface IGetDetailedNews {
  type: typeof GET_DETAILED_NEWS;
  payload: {
    detailedNews: News | undefined;
  };
}

export type LoadingActionTypes = ILoadingOff | ILoadingOn;
export type NewsActionTypes = ISearchNews | IChangePage | IGetDetailedNews;

export type ActionTypes = LoadingActionTypes | NewsActionTypes;
