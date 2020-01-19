import { put, takeEvery } from 'redux-saga/effects';
import { dataSuccess, dataFail } from '../actions';
import { DATA_REQUEST } from '../constants';

function* fetchData(action) {
  try {
    const data = yield fetch(
      `https://murmuring-tor-81614.herokuapp.com/api/goods/${
        action.payload.dealers.length
          ? `?dealers=${action.payload.dealers.join(',')}`
          : ''
      }`,
    ).then(res => res.json());

    yield put(dataSuccess(data));
  } catch (error) {
    yield put(dataFail());

    throw error;
  }
}

export default function* actionWatcher() {
  yield takeEvery(DATA_REQUEST, fetchData);
}
