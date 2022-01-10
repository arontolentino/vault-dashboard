import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../features/home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/transactions" component={Home} exact />
      <Route path="/cards" component={Home} exact />
      <Route path="/transfers" component={Home} exact />
      <Route path="/accounts" component={Home} exact />

      <Route
        render={() => (
          <h1>Ooops. We couldn't find the page you're looking for.</h1>
        )}
      />
    </Switch>
  );
};

export default Routes;
