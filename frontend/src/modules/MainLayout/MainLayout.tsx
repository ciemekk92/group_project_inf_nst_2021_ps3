import React from 'react';
import { Router, HashRouter, Route } from 'react-router-dom';

import { history } from '../../routes/history';

export const MainLayout = (): JSX.Element => {
  const currentUser = true;
  const renderLoggedInView = () => (
    <HashRouter basename={'/'}>
      <Route
        render={(props) => (
          <React.Fragment>
            <AppHeader />
            <AppSidebar />
            <AppMainWindow>
              <Routes {...props} />
            </AppMainWindow>
          </React.Fragment>
        )}
      />
    </HashRouter>
  );

  const renderLoggedOutView = () => (
    <React.Fragment>
      <LandingPage />
    </React.Fragment>
  );

  return (
    <Router history={history}>{currentUser ? renderLoggedInView() : renderLoggedOutView()}</Router>
  );
};
