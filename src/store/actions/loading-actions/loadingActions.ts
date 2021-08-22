import { LOADING_OFF, LOADING_ON } from '../actionTypes';
import { LoadingActionTypes } from '../../types';

export const loaderOff = (): LoadingActionTypes => {
  return {
    type: LOADING_OFF,
  };
};

export const loaderOn = (): LoadingActionTypes => {
  return {
    type: LOADING_ON,
  };
};
