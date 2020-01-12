import React, { useEffect } from 'react';
import { getDataStatus, getData } from './selectors';
import { useSelector, useDispatch } from 'react-redux';
import { dataRequest } from './actions';

const App = () => {
  const dataStatus = useSelector(getDataStatus);
  const data = useSelector(getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequest());
  }, []);

  return (
    <div>
      <div className="green">{dataStatus}</div>
      <div className="market__goods">
        {data.length
          ? data.map(item => {
              return (
                <div className="market__product" key={item.name}>
                  <img
                    className="market__product-logo"
                    src={`https://murmuring-tor-81614.herokuapp.com${item.image}`}
                    alt={`${item.name} logo`}
                  />
                  <h3 className="market__product-name">
                    {item.name}
                  </h3>
                  <p className="market__product-price">
                    {item.price}
                  </p>
                </div>
              );
            })
          : 'THERE NO GOODS!'}
      </div>
    </div>
  );
};

export default App;
