import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Dashboard } from '../Modules/Dashboard';
import { HomePage } from '../Modules/HomePage';

export const Routes = (props: RouteComponentProps): JSX.Element => {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/dashboard'} component={Dashboard} />
    </React.Fragment>
  );
};
