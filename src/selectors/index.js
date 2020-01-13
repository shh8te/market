import { defaultObject, defaultArray } from '../constants';
import { createSelector } from 'reselect';

export const getHomeState = state => state.home;

export const getDataStatus = state => getHomeState(state).dataStatus;
export const getData = state => getHomeState(state).data;

export const getCartState = state => state.cart;

export const getCartGoods = state => getCartState(state).goods;

export const getTotalQuantity = createSelector(
  getCartGoods,
  goods => {
    let totalquantity = 0;

    for (let key in goods) {
      totalquantity += goods[key];
    }

    return totalquantity;
  },
);
