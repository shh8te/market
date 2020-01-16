import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAIL,
  CART_REQUEST_ADD,
  CART_ADD,
  CART_REQUEST_DELETE_ONE,
  CART_DELETE_ONE,
  CART_REQUEST_DELETE_ALL,
  CART_DELETE_ALL,
  CART_REQUEST_CLEAR,
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

export const cartRequestAdd = (image, name, price) => {
  return {
    type: CART_REQUEST_ADD,
    payload: {
      image,
      name,
      price,
    },
  };
};

export const cartAdd = goods => {
  return {
    type: CART_ADD,
    payload: {
      goods,
    },
  };
};

export const cartRequestDeleteOne = id => {
  return {
    type: CART_REQUEST_DELETE_ONE,
    payload: {
      id,
    },
  };
};

export const cartDeleteOne = goods => {
  return {
    type: CART_DELETE_ONE,
    payload: {
      goods,
    },
  };
};

export const cartRequestDeleteAll = id => {
  return {
    type: CART_REQUEST_DELETE_ALL,
    payload: {
      id,
    },
  };
};

export const cartDeleteAll = goods => {
  return {
    type: CART_DELETE_ALL,
    payload: {
      goods,
    },
  };
};

export const cartRequestClear = () => {
  return {
    type: CART_REQUEST_CLEAR,
  };
};

export const cartClear = () => {
  return {
    type: CART_CLEAR,
  };
};
