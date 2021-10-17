import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// components
import Profile from './pages/Profile';
import Index from './pages/Index';
import Account from './pages/Account';
import Items from './pages/Items';
import ItemInStock from './pages/ItemInStock';
import ItemInTransit from './pages/ItemInTransit';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/in-stock" component={ItemInStock} />
        <Route exact path="/items/in-transit" component={ItemInTransit} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
