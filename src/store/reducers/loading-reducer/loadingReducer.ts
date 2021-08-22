import { LOADING_OFF, LOADING_ON } from '../../actions/actionTypes';
import { ILoading, LoadingActionTypes } from '../../types';

export const initialState: ILoading = {
  loading: false,
};

export default function loadingReducer(
  state = initialState,
  action: LoadingActionTypes | undefined,
): ILoading {
  switch (action?.type) {
    case LOADING_OFF: {
      return {
        loading: false,
      };
    }
    case LOADING_ON: {
      return {
        loading: true,
      };
    }
    default:
      return state;
  }
}
