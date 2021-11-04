import React from 'react';
import { Router, HashRouter, Route } from 'react-router-dom';

import { history, Routes } from 'Routes';
import { AppHeader, AppSidebar, AppMainWindow } from './components';
import { LandingPage } from '../LandingPage';

import { LayoutWrapper, HorizontalWrapper } from './MainLayout.styled';

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
                <Routes {...props} />
              </AppMainWindow>
            </HorizontalWrapper>
          </LayoutWrapper>
        )}
      />
    </HashRouter>
  );

  const renderLoggedOutView = () => (
    <LayoutWrapper>
      <AppHeader />
      <LandingPage handleUserChange={handleUserChange} />
    </LayoutWrapper>
  );

  return (
    <Router history={history}>{currentUser ? renderLoggedInView() : renderLoggedOutView()}</Router>
  );
};
