import {
  CHANGE_PAGE,
  GET_DETAILED_NEWS,
  GET_NEWS,
} from '../../actions/actionTypes';
import { INews, NewsActionTypes } from '../../types';

export const initialState: INews = {
  length: 0,
  news: [],
  options: {},
  page: 0,
  detailedNews: undefined,
};

export default function NewsReducer(
  state = initialState,
  action: NewsActionTypes | undefined,
): INews | Partial<INews> {
  switch (action?.type) {
    case GET_NEWS: {
      return {
        ...state,
        page: action.payload.page,
        news: action.payload.news,
        options: action.payload.options,
        length: action.payload.length,
      };
    }
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.payload.page,
        news: action.payload.news,
      };
    }
    case GET_DETAILED_NEWS: {
      return {
        ...state,
        detailedNews: action.payload.detailedNews,
      };
    }

    default:
      return state;
  }
}
