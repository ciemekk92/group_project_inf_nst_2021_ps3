import React from 'react';
import { Router, HashRouter, Route } from 'react-router-dom';

import { history, Routes } from '../../routes';
import { AppHeader, AppSidebar, AppMainWindow } from './components';
import { LandingPage } from '../LandingPage';

import { LayoutWrapper, HorizontalWrapper } from './MainLayout.styled';

export const MainLayout = (): JSX.Element => {
  const currentUser = true;
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
      <LandingPage />
    </LayoutWrapper>
  );

  return (
    <Router history={history}>{currentUser ? renderLoggedInView() : renderLoggedOutView()}</Router>
  );
};
