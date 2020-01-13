import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAIL,
  CART_ADD,
  CART_DELETE,
  CART_CLEAR,
} from '../constants';

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

export const cartAdd = (name, price) => {
  return {
    type: CART_ADD,
    payload: {
      name,
      price,
    },
  };
};

export const cartDelete = name => {
  return {
    type: CART_DELETE,
    payload: {
      name,
    },
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};
