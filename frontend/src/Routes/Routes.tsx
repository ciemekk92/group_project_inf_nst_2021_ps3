import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Dashboard } from '../Modules/Dashboard';
import { HomePage } from '../Modules/HomePage';
import { Login } from 'Modules/Login';
import { Signup } from 'Modules/Signup';

interface Props extends RouteComponentProps {
  handleUserChange: VoidFunctionNoArgs;
}

export const Routes = ({ handleUserChange, ...props }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <Route exact path={'/'} component={HomePage} />
      <Route exact path={'/dashboard'} component={Dashboard} />
    </React.Fragment>
  );
};
