import {
  put,
  takeEvery,
  all,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { dataSuccess, dataFail, cartAdd } from '../actions';
import { DATA_REQUEST, CART_REQUEST } from '../constants';
import { uniqueId } from 'lodash';

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

const getCart = state => state.cart;

function* addGoods(action) {
  const { goods } = yield select(getCart);

  const addFirstItem = () => {
    const newGoods = [
      {
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
        id: uniqueId(),
        quantity: 1,
      },
    ];

    return newGoods;
  };

  const updateItem = item => {
    const newGoods = [
      ...goods.filter(item => item.name !== action.payload.name),
      {
        ...item,
        id: uniqueId(),
        quantity: item.quantity + 1,
      },
    ];

    return newGoods;
  };

  const addNewItem = () => {
    const newGoods = [
      ...goods,
      {
        image: action.payload.image,
        name: action.payload.name,
        price: action.payload.price,
        id: uniqueId(),
        quantity: 1,
      },
    ];

    return newGoods;
  };

  const getNewGoods = () => {
    if (goods.length) {
      const item = goods.find(
        item => item.name === action.payload.name,
      );

      return item ? updateItem(item) : addNewItem();
    } else {
      return addFirstItem();
    }
  };

  yield put(cartAdd(getNewGoods()));
}

function* actionWatcher() {
  yield takeEvery(DATA_REQUEST, fetchData);
  yield takeEvery(CART_REQUEST, addGoods);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
