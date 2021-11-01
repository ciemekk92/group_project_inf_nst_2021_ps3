import React from 'react';
import { ICON_SIZE } from 'shared/constants';
import { IconFilled } from 'shared/IconFilled';
import { IconOutline } from 'shared/IconOutline';

import { SidebarBody, SidebarList, SidebarListItem } from './AppSidebar.styled';

export const AppSidebar = (): JSX.Element => {
  return (
    <SidebarBody>
      <SidebarList>
        <SidebarListItem>
          <IconOutline iconName="dashboard" iconSize={ICON_SIZE.XLARGE} />
        </SidebarListItem>
        <SidebarListItem>{`Item 2` + `            ` + `- z dluga nazwa`}</SidebarListItem>
        <SidebarListItem>
          <IconFilled iconName="delete" />
        </SidebarListItem>
      </SidebarList>
    </SidebarBody>
  );
};
