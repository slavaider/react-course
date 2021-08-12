import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  news: newsReducer,
  loading: loadingReducer,
});
