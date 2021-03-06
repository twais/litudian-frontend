import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/Index';

// components
import Profile from './pages/Profile';
import Index from './pages/Index';
import Account from './pages/Account';
import Items from './pages/Items';
import ItemInStock from './pages/ItemInStock';
import ItemInTransit from './pages/ItemInTransit';
import RequestItem from './pages/RequestItem';
import Forum from './pages/Forum';
import Sales from './pages/Sales';
import Order from './pages/Order';
import Categories from './pages/Categories';
import MOQ from './pages/MOQ';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/items/in-stock" component={ItemInStock} />
          <Route exact path="/items/in-transit" component={ItemInTransit} />
          <Route exact path="/request-item" component={RequestItem} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/categories/:id" component={Categories} />
          <Route exact path="/products/:id" component={MOQ} />
        </Switch>
      </Router>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
