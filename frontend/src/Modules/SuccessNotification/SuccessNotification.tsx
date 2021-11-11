import React from 'react';

import { Heading6 } from 'Shared/Typography';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { StyledLink } from 'Shared/StyledLink';
import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';
import { NOTIFICATION_TYPES } from 'Shared/constants';

interface Props {
  type: NOTIFICATION_TYPES;
}

export const SuccessNotification = ({ type }: Props): JSX.Element => {
  const renderHeading = () => {
    return type === NOTIFICATION_TYPES.SIGNUP
      ? 'Rejestracja zakończona powodzeniem! Pod podany adres email został wysłany link aktywacyjny,\n' +
          '        użyj go, aby aktywować swoje konto.'
      : 'Twoje hasło zostało zresetowane. Pod podany adres email został wysłany link pozwalający ustawić nowe hasło';
  };
  return (
    <LoginWrapper>
      <Heading6>{renderHeading()}</Heading6>
      <ButtonsContainer>
        <ButtonFilled>
          <StyledLink replace to={'/'}>
            Wróć do strony głównej
          </StyledLink>
        </ButtonFilled>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
