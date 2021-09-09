import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProductInfo from '../components/ProductInfo';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:id" component={ProductInfo} />
      </Switch>
    </BrowserRouter>
  );
}
