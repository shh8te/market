import { CART_ADD, CART_DELETE, CART_CLEAR } from '../constants';
import { uniqueId } from 'lodash';

const initialState = {
  goods: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD: {
      return {
        ...state,
        goods: [
          ...state.goods,
          {
            image: action.payload.image,
            name: action.payload.name,
            price: action.payload.price,
            id: uniqueId(),
          },
        ],
      };
    }
    case CART_DELETE: {
      return {
        ...state,
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
