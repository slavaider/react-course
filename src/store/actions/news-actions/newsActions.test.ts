import {
  syncChangePage,
  syncGetDetailedNews,
  syncSearchNews,
} from './newsActions';
import { NewsActionTypes } from '../../types';
import News from '../../../interfaces/news';

describe('news actions', () => {
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

  test('sync SearchNews', () => {
    const testData = { articles: [testNews], totalResults: 1, status: '200' };
    const result: NewsActionTypes = syncSearchNews(testData, {});
    expect(syncSearchNews(testData, {})).toEqual(result);
  });

  test('sync ChangePage', () => {
    const testData = { articles: [testNews], totalResults: 1, status: '200' };
    const result: NewsActionTypes = syncChangePage(testData, 2);
    expect(syncChangePage(testData, 2)).toEqual(result);
  });

  test('sync GetDetailedNews', () => {
    const result: NewsActionTypes = syncGetDetailedNews(testNews);
    expect(syncGetDetailedNews(testNews)).toEqual(result);
  });
});
