import React from 'react';
import { ICON_SIZE } from 'Shared/constants';
import { IconFilled } from 'Shared/IconFilled';
import { IconOutline } from 'Shared/IconOutline';
import { SidebarRoute, SIDEBAR_ROUTES } from 'Routes/constants';

import { SidebarBody, SidebarList, SidebarListItem } from './AppSidebar.styled';
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
