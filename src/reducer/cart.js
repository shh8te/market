import { CART_ADD, CART_DELETE, CART_CLEAR } from '../constants';

const initialState = {
  goods: {},
  total: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      return {
        ...state,
        goods: {
          ...state.goods,
          [action.payload.name]: state.goods[action.payload.name]
            ? state.goods[action.payload.name] + 1
            : 1,
        },
        total: state.total + action.payload.price,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
