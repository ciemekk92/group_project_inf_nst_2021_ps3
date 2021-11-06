import React from 'react';
import { StyledLink } from 'Shared/StyledLink';

import { HeaderBody } from './AppHeader.styled';

export const AppHeader = (): JSX.Element => {
  return (
    <HeaderBody>
      <StyledLink to="/" replace>
        <h1>BOARDEL</h1>
      </StyledLink>
      <div style={{ display: 'flex', marginLeft: 'auto' }}>
        <p>Profil</p>
        <p>Wiadomosci</p>
        <p>Powiadomienia</p>
      </div>
    </HeaderBody>
  );
};
