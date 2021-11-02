import React from 'react';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { ButtonsContainer, LandingContainer } from './LandingPage.styled';

interface Props {
  handleUserChange: VoidFunctionNoArgs;
}

export const LandingPage = ({ handleUserChange }: Props): JSX.Element => {
  return (
    <VerticalPageWrapper>
      <LandingContainer>
        <p>Tu zrobimy jakis fajny tekst, co by kazdemu sie spodobal</p>
        <ButtonsContainer>
          <ButtonFilled onClick={handleUserChange}>Zaloguj</ButtonFilled>
          <ButtonFilled onClick={() => null}>Zarejestruj (nie działa)</ButtonFilled>
        </ButtonsContainer>
      </LandingContainer>
    </VerticalPageWrapper>
  );
};
