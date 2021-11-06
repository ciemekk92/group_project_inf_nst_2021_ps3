import React from 'react';
import { ICON_SIZE } from 'Shared/constants';
import { IconOutline } from 'Shared/IconOutline';
import { StyledLink } from 'Shared/StyledLink';
import { StyledSidebarItem } from './SidebarItem.styled';

interface Props {
  name: string;
  iconName: string;
  route: string;
}

export const SidebarItem = ({ name, iconName, route }: Props): JSX.Element => {
  return (
    <StyledLink replace to={route}>
      <StyledSidebarItem>
        <IconOutline iconName={iconName} iconSize={ICON_SIZE.XL} />
        <p>{name}</p>
      </StyledSidebarItem>
    </StyledLink>
  );
};
