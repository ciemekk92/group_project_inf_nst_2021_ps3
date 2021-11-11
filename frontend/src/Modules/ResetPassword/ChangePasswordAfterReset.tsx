import React from 'react';

import { updateObject } from 'Utils/updateObject';
import { Api } from 'Utils/Api';
import { Container, useLoading } from 'Hooks/useLoading';
import { Heading3, Heading6 } from 'Shared/Typography';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { TextInput } from 'Shared/TextInput';
import { StyledLink } from 'Shared/StyledLink';
import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';

interface Props {
  match: {
    params: {
      token: string;
    };
  };
}

interface PasswordResetData {
  password: string;
  confirmPassword: string;
}

export const ChangePasswordAfterReset = ({ match }: Props): JSX.Element => {
  const initialData: PasswordResetData = { password: '', confirmPassword: '' };
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [data, setData] = React.useState<PasswordResetData>(initialData);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  const isSubmitButtonDisabled =
    data.password.length <= 2 || data.password !== data.confirmPassword;

  const handleSubmit = async () => {
    try {
      startLoading();
      const result = await Api.put(`users/set-new-password/${match.params.token}`, {
        password: data.password
      });

      stopLoading();

      if (result.status === 204) {
        setIsSuccess(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return isLoading ? (
    <Container isLoading={isLoading} />
  ) : isSuccess ? (
    <LoginWrapper>
      <Heading3>SUKCES!</Heading3>
      <Heading6>Twoje hasło zostało zmienione.</Heading6>
      <ButtonsContainer>
        <ButtonFilled>
          <StyledLink replace to={'/'}>
            Zacznij korzystanie z portalu
          </StyledLink>
        </ButtonFilled>
      </ButtonsContainer>
    </LoginWrapper>
  ) : (
    <LoginWrapper>
      <Heading3>USTAWIANIE NOWEGO HASŁA</Heading3>
      <TextInput type="password" name="password" placeholder="Hasło" onChange={onChange} />
      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        onChange={onChange}
      />
      <ButtonsContainer>
        <ButtonFilled disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
          Wyślij
        </ButtonFilled>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
