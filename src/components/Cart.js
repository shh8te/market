import React from 'react';
import { getTotalPrice, getCartGoods } from '../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { cartDelete, cartClear } from '../actions';

const Cart = () => {
  const totalPrice = useSelector(getTotalPrice);
  const cartGoods = useSelector(getCartGoods);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {cartGoods.map(item => {
          return (
            <div className="market__product" key={item.id}>
              <img
                className="market__product-logo"
                src={`https://murmuring-tor-81614.herokuapp.com${item.image}`}
                alt={`${item.name} logo`}
              />
              <h3 className="market__product-name">{item.name}</h3>
              <p className="market__product-price">{item.price}</p>
              <button
                type="button"
                onClick={() => dispatch(cartDelete(item.id))}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <span>{totalPrice}</span>
      <button type="button" onClick={() => dispatch(cartClear())}>
        CLEAR CART!
      </button>
    </div>
  );
};

export default Cart;
