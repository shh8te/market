import { CART_ADD, CART_DELETE, CART_CLEAR } from '../constants';

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
    case CART_DELETE: {
      return {
        goods: state.goods.filter(
          item => item.id !== action.payload.id,
        ),
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
