import React from 'react';

import { history } from 'Routes';
import { updateObject } from 'Utils/updateObject';
import { Api } from 'Utils/Api';
import { useLoading, Container } from 'Hooks/useLoading';
import { Heading3 } from 'Shared/Typography';
import { TextInput } from 'Shared/TextInput';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { StyledLink } from 'Shared/StyledLink';
import { EMAIL_PATTERN } from 'Shared/constants';

import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';

interface ForgotPasswordData {
  email: string;
}

export const ResetPassword = (): JSX.Element => {
  const initialData: ForgotPasswordData = {
    email: ''
  };

  const [data, setData] = React.useState<ForgotPasswordData>(initialData);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const isResetButtonDisabled = !EMAIL_PATTERN.test(data.email) || data.email.length < 6;

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  const handleResetPassword = async () => {
    startLoading();
    const result = await Api.put('users/reset-password', { email: data.email });

    stopLoading();
    if (result.status === 204) {
      history.push('/reset-password-success');
    } else {
      console.log(await result.json());
    }
  };

  return (
    <LoginWrapper>
      <Container isLoading={isLoading} />
      <Heading3>RESETOWANIE HASŁA</Heading3>
      <TextInput name="email" placeholder="E-mail" onChange={onChange} />
      <ButtonsContainer>
        <ButtonFilled disabled={isResetButtonDisabled} onClick={handleResetPassword}>
          Zresetuj hasło
        </ButtonFilled>
        <ButtonOutline>
          <StyledLink replace to={'/'}>
            Wróć
          </StyledLink>
        </ButtonOutline>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
