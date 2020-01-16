import { put, select, takeEvery } from 'redux-saga/effects';
import {
  cartAdd,
  cartDeleteOne,
  cartDeleteAll,
  cartClear,
} from '../actions';
import { uniqueId } from 'lodash';
import {
  CART_REQUEST_ADD,
  CART_REQUEST_DELETE_ONE,
  CART_REQUEST_DELETE_ALL,
  CART_REQUEST_CLEAR,
} from '../constants';

const getCart = state => state.cartReducer;

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

  const updateItem = name =>
    goods.map(item => {
      if (item.name === name) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

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

      return item ? updateItem(action.payload.name) : addNewItem();
    } else {
      return addFirstItem();
    }
  };

  yield put(cartAdd(getNewGoods()));
}

function* deleteOne(action) {
  const { goods } = yield select(getCart);

  const updateItem = id =>
    goods.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

  yield put(cartDeleteOne(updateItem(action.payload.id)));
}

function* deleteAll(action) {
  const { goods } = yield select(getCart);

  const deleteItem = () => {
    const newGoods = [
      ...goods.filter(item => item.id !== action.payload.id),
    ];

    return newGoods;
  };

  yield put(cartDeleteAll(deleteItem()));
}

function* clearCart() {
  yield put(cartClear());
}

export default function* actionWatcher() {
  yield takeEvery(CART_REQUEST_ADD, addGoods);
  yield takeEvery(CART_REQUEST_DELETE_ONE, deleteOne);
  yield takeEvery(CART_REQUEST_DELETE_ALL, deleteAll);
  yield takeEvery(CART_REQUEST_CLEAR, clearCart);
}
