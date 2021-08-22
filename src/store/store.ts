import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import newsReducer from "./reducers/news-reducer/newsReducer";
import loadingReducer from "./reducers/loading-reducer/loadingReducer";

const reducer = combineReducers({
  news: newsReducer,
  loading: loadingReducer,
});

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
    reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
