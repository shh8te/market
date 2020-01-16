import { defaultObject, defaultArray } from '../constants';
import { createSelector } from 'reselect';

export const getHomeState = state => state.home;

export const getDataStatus = state =>
  getHomeState(state).dataStatus || '';

export const getData = state =>
  getHomeState(state).data || defaultArray;

export const getCartState = state => state.cart;

export const getCartGoods = state =>
  getCartState(state).goods || defaultArray;

export const getTotalQuantity = createSelector(getCartGoods, goods =>
  goods.reduce((acc, item) => (acc += item.quantity), 0),
);

export const getTotalPrice = createSelector(getCartGoods, goods =>
  goods.reduce((acc, item) => {
    acc = +acc.toFixed(2) + +item.price.toFixed(2);

    return +acc.toFixed(2);
  }, 0),
);
