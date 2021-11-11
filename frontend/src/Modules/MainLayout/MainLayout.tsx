import React from 'react';
import { HashRouter, Route, Router } from 'react-router-dom';

import { history, Routes } from 'Routes';
import { GlobalErrorBoundary } from 'Modules/GlobalErrorBoundary';
import { LandingPage } from 'Modules/LandingPage';
import { Login } from 'Modules/Login';
import { UserActivation } from 'Modules/UserActivation';
import { Signup, SuccessNotification } from 'Modules/Signup';
import { ChangePasswordAfterReset, ResetPassword } from 'Modules/ResetPassword';
import { UserModel } from 'Models/UserModel';
import { NOTIFICATION_TYPES } from 'Shared/constants';

import { AppHeader, AppMainWindow, AppSidebar } from './components';
import { HorizontalWrapper, LayoutWrapper } from './MainLayout.styled';

export const MainLayout = (): JSX.Element => {
  const [currentUser, setCurrentUser] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    displayName: '',
    accessToken: ''
  });

  React.useEffect(() => {
    UserModel.currentUser.subscribe((user) => {
      setCurrentUser(user);
    });
  });

  const renderLoggedInView = () => (
    <HashRouter basename={'/'}>
      <Route
        render={(_props) => (
          <LayoutWrapper>
            <AppHeader />
            <HorizontalWrapper>
              <AppSidebar />
              <AppMainWindow>
                <GlobalErrorBoundary>
                  <Routes />
                </GlobalErrorBoundary>
              </AppMainWindow>
            </HorizontalWrapper>
          </LayoutWrapper>
        )}
      />
    </HashRouter>
  );

  const renderLoggedOutView = () => (
    <HashRouter basename={'/'}>
      <Route
        render={(_props) => (
          <LayoutWrapper>
            <AppHeader />
            <GlobalErrorBoundary>
              <Route exact path={'/'} component={LandingPage} />
              <Route exact path={'/login'} component={Login} />
              <Route exact path={'/signup'} component={Signup} />
              <Route
                exact
                path={'/signup-success'}
                render={(_props) => <SuccessNotification type={NOTIFICATION_TYPES.SIGNUP} />}
              />
              <Route exact path={'/reset-password'} component={ResetPassword} />
              <Route
                exact
                path={'/reset-password-success'}
                render={(_props) => <SuccessNotification type={NOTIFICATION_TYPES.PASSWORD} />}
              />
              <Route
                exact
                path={'/reset-change-password/:token'}
                render={(props) => <ChangePasswordAfterReset match={props.match} />}
              />
              <Route
                exact
                path={'/user-activation/:token'}
                render={(props) => <UserActivation match={props.match} />}
              />
            </GlobalErrorBoundary>
          </LayoutWrapper>
        )}
      />
    </HashRouter>
  );

  return (
    <Router history={history}>
      {currentUser.accessToken ? renderLoggedInView() : renderLoggedOutView()}
    </Router>
  );
};
