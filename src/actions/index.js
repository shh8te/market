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

export const cartAdd = (image, name, price) => {
  return {
    type: CART_ADD,
    payload: {
      image,
      name,
      price,
    },
  };
};

export const cartDelete = id => {
  return {
    type: CART_DELETE,
    payload: {
      id,
    },
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};
