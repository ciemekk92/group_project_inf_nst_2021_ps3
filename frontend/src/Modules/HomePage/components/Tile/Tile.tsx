import React from 'react';
import { TileContainer } from './Tile.styled';
import { StyledLink } from 'Shared/StyledLink';
import { ICON_SIZE } from 'Shared/constants';
import { IconOutline } from 'Shared/IconOutline';

interface Props {
  iconKey: string;
  label: string;
  routePath: string;
}

export const Tile = ({ iconKey, label, routePath }: Props): JSX.Element => {
  return (
    <StyledLink to={routePath} replace>
      <TileContainer>
        <IconOutline iconName={iconKey} iconSize={ICON_SIZE.XXL} />
        <p>{label}</p>
      </TileContainer>
    </StyledLink>
  );
};
