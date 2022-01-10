import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from '../components/Page';
import { Dashboard } from '../features/dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route
        path="/transactions"
        render={() => <Page title="Transactions" />}
        exact
      />
      <Route path="/cards" render={() => <Page title="Cards" />} exact />
      <Route
        path="/transfers"
        render={() => <Page title="Transfers" />}
        exact
      />
      <Route path="/accounts" render={() => <Page title="Accounts" />} exact />

      <Route
        render={() => (
          <h1>Ooops. We couldn't find the page you're looking for.</h1>
        )}
      />
    </Switch>
  );
};

export default Routes;
