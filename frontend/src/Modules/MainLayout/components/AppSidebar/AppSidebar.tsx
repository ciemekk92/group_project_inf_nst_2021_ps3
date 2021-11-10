import React from 'react';
import { SidebarRoute, SIDEBAR_ROUTES } from 'Routes/constants';

import { SidebarBody, SidebarList } from './AppSidebar.styled';
import { SidebarItem } from './components';

export const AppSidebar = (): JSX.Element => {
  const renderRoutes = () => {
    return SIDEBAR_ROUTES.map((route: SidebarRoute) => (
      <SidebarItem
        key={route.iconName}
        iconName={route.iconName}
        name={route.name}
        route={route.route}
      />
    ));
  };

  return (
    <SidebarBody>
      <SidebarList>{renderRoutes()}</SidebarList>
    </SidebarBody>
  );
};
