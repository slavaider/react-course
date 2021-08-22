import { createStore } from 'redux';
import newsReducer, { initialState } from './newsReducer';
import { NewsActionTypes } from '../../types';
import {
  CHANGE_PAGE,
  GET_DETAILED_NEWS,
  GET_NEWS,
} from '../../actions/actionTypes';
import News from '../../../interfaces/news';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(newsReducer);
describe('news reducer tests', () => {
  const testNews: News = {
    author: '',
    content: '',
    description: '',
    publishedAt: '',
    source: {},
    title: '',
    url: '',
    urlToImage: '',
  };

  test('initial state', () => {
    expect(store.getState()).toEqual(initialState);
  });

  test('sync getNews', () => {
    const testData = {
      page: 0,
      options: {},
      length: 0,
      news: [],
    };
    const action: NewsActionTypes = { type: GET_NEWS, payload: testData };
    store.dispatch(action);
    expect(store.getState()).toEqual(testData);
  });

  test('sync ChangePage', () => {
    const action: NewsActionTypes = {
      type: CHANGE_PAGE,
      payload: {
        news: [testNews],
        page: 1,
      },
    };
    store.dispatch(action);
    expect(store.getState().news).toEqual([testNews]);
    expect(store.getState().page).toEqual(1);
  });

  test('sync getDetailedNews', () => {
    const action: NewsActionTypes = {
      type: GET_DETAILED_NEWS,
      payload: {
        detailedNews: testNews,
      },
    };
    store.dispatch(action);
    expect(store.getState().detailedNews).toEqual(testNews);
  });
});
