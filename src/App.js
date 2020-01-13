import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { useSelector } from 'react-redux';
import { getTotalQuantity } from './selectors';

const App = () => {
  const totalQuantity = useSelector(getTotalQuantity);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/cart">
                cart
                <span>{totalQuantity}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
