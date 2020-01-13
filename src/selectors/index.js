import { defaultObject, defaultArray } from '../constants';
import { createSelector } from 'reselect';

export const getHomeState = state => state.home;
export const getCartState = state => state.cart;

export const getDataStatus = state => getHomeState(state).dataStatus;
export const getData = state => getHomeState(state).data;
