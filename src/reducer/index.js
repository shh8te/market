import { combineReducers } from 'redux';
import home from './home';
import cart from './cart';

const reducer = combineReducers({
  home,
  cart,
});

export default reducer;
