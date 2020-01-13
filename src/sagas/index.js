import { put, takeEvery, all } from 'redux-saga/effects';
import { dataSuccess, dataFail } from '../actions';
import { DATA_REQUEST } from '../constants';

function* fetchData() {
  try {
    const data = yield fetch(
      'https://murmuring-tor-81614.herokuapp.com/api/goods/',
    ).then(res => res.json());

    yield put(dataSuccess(data));
  } catch (error) {
    yield put(dataFail());

    throw error;
  }
}

function* actionWatcher() {
  yield takeEvery(DATA_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
