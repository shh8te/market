import {
  CART_ADD,
  CART_DELETE_ONE,
  CART_DELETE_ALL,
  CART_CLEAR,
} from '../constants';

const initialState = {
  goods: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      return {
        goods: action.payload.goods,
      };
    }
    case CART_DELETE_ONE: {
      return {
        goods: action.payload.goods,
      };
    }
    case CART_DELETE_ALL: {
      return {
        goods: action.payload.goods,
      };
    }
    case CART_CLEAR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default cart;
