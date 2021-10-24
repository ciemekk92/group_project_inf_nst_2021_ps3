import React from 'react';

import { SidebarBody, SidebarList, SidebarListItem } from './AppSidebar.styled';

export const AppSidebar = (): JSX.Element => {
  return (
    <SidebarBody>
      <SidebarList>
        <SidebarListItem>Item 1</SidebarListItem>
        <SidebarListItem>{`Item 2` + `            ` + `- z dluga nazwa`}</SidebarListItem>
        <SidebarListItem>Item 3</SidebarListItem>
      </SidebarList>
    </SidebarBody>
  );
};
