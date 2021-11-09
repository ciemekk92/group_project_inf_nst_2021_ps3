import React from 'react';
import { Router, HashRouter, Route } from 'react-router-dom';
import { history, Routes } from 'Routes';
import { LandingPage } from 'Modules/LandingPage';
import { Login } from 'Modules/Login';
import { Signup, SignupSuccess } from 'Modules/Signup';
import { ResetPassword } from 'Modules/ResetPassword';

import { AppHeader, AppSidebar, AppMainWindow } from './components';
import { LayoutWrapper, HorizontalWrapper } from './MainLayout.styled';
import { GlobalErrorBoundary } from '../GlobalErrorBoundary/GlobalErrorBoundary';

export const MainLayout = (): JSX.Element => {
  const [currentUser, setCurrentUser] = React.useState<boolean>(false);

  const handleUserChange = () => setCurrentUser(!currentUser);

  const renderLoggedInView = () => (
    <HashRouter basename={'/'}>
      <Route
        render={(props) => (
          <LayoutWrapper>
            <AppHeader />
            <HorizontalWrapper>
              <AppSidebar />
              <AppMainWindow>
                <GlobalErrorBoundary>
                  <Routes {...props} handleUserChange={handleUserChange} />
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
              <Route exact path={'/'} render={(_props) => <LandingPage />} />
              <Route
                exact
                path={'/login'}
                render={(props) => <Login {...props} handleUserChange={handleUserChange} />}
              />
              <Route exact path={'/signup'} render={(_props) => <Signup />} />
              <Route exact path={'/signup-success'} render={(_props) => <SignupSuccess />} />
              <Route exact path={'/reset-password'} render={(_props) => <ResetPassword />} />
            </GlobalErrorBoundary>
          </LayoutWrapper>
        )}
      />
    </HashRouter>
  );

  return (
    <Router history={history}>{currentUser ? renderLoggedInView() : renderLoggedOutView()}</Router>
  );
};
