import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/transactions" component={Dashboard} exact />
      <Route path="/cards" component={Dashboard} exact />
      <Route path="/transfers" component={Dashboard} exact />
      <Route path="/accounts" component={Dashboard} exact />

      <Route
        render={() => (
          <h1>Ooops. We couldn't find the page you're looking for.</h1>
        )}
      />
    </Switch>
  );
};

export default Routes;
