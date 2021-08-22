import { createStore } from 'redux';
import { LOADING_OFF, LOADING_ON } from '../../actions/actionTypes';
import loadingReducer, { initialState } from './loadingReducer';
import { LoadingActionTypes } from '../../types';

const store = createStore(loadingReducer);

describe('loading tests', () => {
  test('initial state', () => {
    expect(store.getState()).toEqual(initialState);
  });

  test('turn loading on', () => {
    const action: LoadingActionTypes = { type: LOADING_ON };
    store.dispatch(action);
    expect(store.getState().loading).toEqual(true);
  });

  test('turn loading off', () => {
    const action: LoadingActionTypes = { type: LOADING_OFF };
    store.dispatch(action);
    expect(store.getState().loading).toEqual(false);
  });
});
