import React from 'react';
import { ICON_SIZE } from 'Shared/constants';
import { IconFilled } from 'Shared/IconFilled';
import { IconOutline } from 'Shared/IconOutline';

import { SidebarBody, SidebarList, SidebarListItem } from './AppSidebar.styled';

export const AppSidebar = (): JSX.Element => {
  return (
    <SidebarBody>
      <SidebarList>
        <SidebarListItem>
          <IconOutline iconName="dashboard" iconSize={ICON_SIZE.XL} />
        </SidebarListItem>
        <SidebarListItem>{`Item 2` + `            ` + `- z dluga nazwa`}</SidebarListItem>
        <SidebarListItem>
          <IconFilled iconName="delete" />
        </SidebarListItem>
      </SidebarList>
    </SidebarBody>
  );
};
