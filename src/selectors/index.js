import { defaultObject, defaultArray } from '../constants';
import { createSelector } from 'reselect';

export const getDataStatus = state => state.dataStatus;
export const getData = state => state.data;
