import { all, fork } from 'redux-saga/effects';
import cartSaga from './cartSaga';
import homeSaga from './homeSaga';

export default function* rootSaga() {
  yield all([fork(homeSaga), fork(cartSaga)]);
}
