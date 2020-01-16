import React from 'react';
import { getTotalPrice, getCartGoods } from '../selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  cartRequestDeleteOne,
  cartRequestDeleteAll,
  cartRequestClear,
  cartRequestAdd,
} from '../actions';

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
              <span>{item.quantity}</span>
              <p className="market__product-price">{item.price}</p>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(
                      cartRequestAdd(
                        item.image,
                        item.name,
                        +item.price.toFixed(2),
                      ),
                    )
                  }
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(cartRequestDeleteOne(item.id))
                  }
                  disabled={item.quantity < 2}
                >
                  -
                </button>
              </div>
              <button
                type="button"
                onClick={() =>
                  dispatch(cartRequestDeleteAll(item.id))
                }
              >
                delete all
              </button>
            </div>
          );
        })}
      </div>
      <span>{totalPrice}</span>
      <button
        type="button"
        onClick={() => dispatch(cartRequestClear())}
      >
        CLEAR CART!
      </button>
    </div>
  );
};

export default Cart;
