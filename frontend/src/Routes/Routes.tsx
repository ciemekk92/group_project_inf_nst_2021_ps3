import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Dashboard } from '../Modules/Dashboard';

export const Routes = (props: RouteComponentProps): JSX.Element => {
  return (
    <React.Fragment>
      <Route exact path={'/dashboard'} component={Dashboard} />
    </React.Fragment>
  );
};
