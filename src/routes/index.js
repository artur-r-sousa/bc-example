import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from '../components/Home';

import Route from './Route';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
