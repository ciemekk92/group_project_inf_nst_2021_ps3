import React from 'react';
import { Router, HashRouter, Route } from 'react-router-dom';

import { history, Routes } from 'Routes';
import { AppHeader, AppSidebar, AppMainWindow } from './components';
import { LandingPage } from '../LandingPage';

import { LayoutWrapper, HorizontalWrapper } from './MainLayout.styled';
import { Login } from 'Modules/Login';
import { Signup } from 'Modules/Signup';

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
                <Routes {...props} handleUserChange={handleUserChange} />
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
        render={(props) => (
          <LayoutWrapper>
            <AppHeader />
            <Route exact path={'/'} render={(props) => <LandingPage />} />
            <Route
              exact
              path={'/login'}
              render={(props) => <Login {...props} handleUserChange={handleUserChange} />}
            />
            <Route exact path={'/signup'} render={(props) => <Signup />} />
          </LayoutWrapper>
        )}
      />
    </HashRouter>
  );

  return (
    <Router history={history}>{currentUser ? renderLoggedInView() : renderLoggedOutView()}</Router>
  );
};
