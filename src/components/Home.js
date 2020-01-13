import React, { useEffect } from 'react';
import { getDataStatus, getData } from '../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { dataRequest } from '../actions';

const Home = () => {
  const dataStatus = useSelector(getDataStatus);
  const data = useSelector(getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequest());
  }, []);
  return (
    <div className="market__goods">
      <div className="green">{dataStatus}</div>
      {data.length
        ? data.map(item => {
            return (
              <div className="market__product" key={item.name}>
                <img
                  className="market__product-logo"
                  src={`https://murmuring-tor-81614.herokuapp.com${item.image}`}
                  alt={`${item.name} logo`}
                />
                <h3 className="market__product-name">{item.name}</h3>
                <p className="market__product-price">{item.price}</p>
                <button type="button">add to cart</button>
              </div>
            );
          })
        : 'THERE NO GOODS!'}
    </div>
  );
};

export default Home;
