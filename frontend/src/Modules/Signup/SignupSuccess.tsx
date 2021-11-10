import React from 'react';

import { Heading6 } from 'Shared/Typography';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { StyledLink } from 'Shared/StyledLink';
import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';

export const SignupSuccess = (): JSX.Element => {
  return (
    <LoginWrapper>
      <Heading6>
        Rejestracja zakończona powodzeniem! Pod podany adres email został wysłany link aktywacyjny,
        użyj go, aby aktywować swoje konto.
      </Heading6>
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
