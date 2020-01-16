import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAIL,
  CART_ADD,
  CART_DELETE,
  CART_CLEAR,
  CART_REQUEST,
} from '../constants';
import { actionChannel } from 'redux-saga/effects';

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

export const cartRequest = (image, name, price) => {
  return {
    type: CART_REQUEST,
    payload: {
      image,
      name,
      price,
    }
  }
}

export const cartAdd = (goods) => {
  return {
    type: CART_ADD,
    payload: {
      goods,
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
