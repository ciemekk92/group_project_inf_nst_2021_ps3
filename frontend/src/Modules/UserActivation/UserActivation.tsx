import React from 'react';

import { Api } from 'Utils/Api';
import { history } from 'Routes';
import { useLoading, Container } from 'Hooks/useLoading';
import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';
import { Heading3, Heading6 } from 'Shared/Typography';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { StyledLink } from 'Shared/StyledLink';

interface Props {
  match: {
    params: {
      token: string;
    };
  };
}

export const UserActivation = ({ match }: Props): JSX.Element => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  React.useEffect(() => {
    const activateUser = async (token: string) => {
      startLoading();
      return await Api.put(`users/activate/${token}`);
    };

    if (match.params.token) {
      activateUser(match.params.token).then((response: Response) => {
        if ([400, 404, 500].includes(response.status)) {
          setTimeout(() => {
            stopLoading();
            history.push('/');
          }, 1000);
        } else {
          stopLoading();
        }
      });
    }
  }, []);

  return isLoading ? (
    <Container isLoading={isLoading} />
  ) : (
    <LoginWrapper>
      <Heading3>AKTYWACJA KONTA</Heading3>
      <Heading6>Twoje konto zostało aktywowane!</Heading6>
      <ButtonsContainer>
        <ButtonOutline>
          <StyledLink replace to={'/'}>
            Zacznij korzystanie z portalu
          </StyledLink>
        </ButtonOutline>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
