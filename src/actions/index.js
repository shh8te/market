import { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } from '../constants';

export const dataRequest = () => {
  return {
    type: DATA_REQUEST,
  };
};

export const dataSuccess = data => {
  return {
    type: DATA_SUCCESS,
    payload: {
      data,
    },
  };
};

export const dataFail = () => {
  return {
    type: DATA_FAIL,
  };
};
