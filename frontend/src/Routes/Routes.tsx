import React from 'react';
import { Route } from 'react-router-dom';
import { Dashboard } from 'Modules/Dashboard';
import { HomePage } from 'Modules/HomePage';

export const Routes = (): JSX.Element => {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/dashboard'} component={Dashboard} />
    </React.Fragment>
  );
};
