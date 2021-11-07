import React from 'react';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { StyledLink } from 'Shared/StyledLink';
import { ButtonsContainer, LandingContainer } from './LandingPage.styled';

export const LandingPage = (): JSX.Element => {
  return (
    <VerticalPageWrapper>
      <LandingContainer>
        <p>Tu zrobimy jakis fajny tekst, co by kazdemu sie spodobal</p>
        <ButtonsContainer>
          <StyledLink replace to={'/login'}>
            <ButtonFilled>Zaloguj</ButtonFilled>
          </StyledLink>
          <StyledLink replace to={'/signup'}>
            <ButtonFilled onClick={() => null}>Zarejestruj (nie działa)</ButtonFilled>
          </StyledLink>
        </ButtonsContainer>
      </LandingContainer>
    </VerticalPageWrapper>
  );
};
