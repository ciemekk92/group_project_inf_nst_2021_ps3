import React from 'react';

import { history } from 'Routes/history';
import { updateObject } from 'Utils/updateObject';
import { Api } from 'Utils/Api';
import { Heading3 } from 'Shared/Typography';
import { TextInput } from 'Shared/TextInput';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { StyledLink } from 'Shared/StyledLink';
import { EMAIL_PATTERN } from 'Shared/constants';
import { useLoading, Container } from 'Hooks/useLoading';

import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';

interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Signup = (): JSX.Element => {
  const initialData: SignupData = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [data, setData] = React.useState<SignupData>(initialData);
  const { isLoading, startLoading, stopLoading } = useLoading();

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  const handleSignup = async () => {
    startLoading();
    const result = await Api.post('users', { email: data.email, password: data.password });

    stopLoading();
    if (result.status === 201) {
      history.push('/signup-success');
    } else {
      console.log(await result.json());
    }
  };

  const isSignupButtonDisabled =
    data.password.length <= 2 ||
    data.password !== data.confirmPassword ||
    !EMAIL_PATTERN.test(data.email);

  return (
    <LoginWrapper>
      <Container isLoading={isLoading} />
      <Heading3>REJESTRACJA</Heading3>
      <TextInput name="email" placeholder="E-mail" onChange={onChange} />
      <TextInput type="password" name="password" placeholder="Hasło" onChange={onChange} />
      <TextInput
        type="password"
        name="confirmPassword"
        placeholder="Potwierdź hasło"
        onChange={onChange}
      />
      <ButtonsContainer>
        <ButtonFilled disabled={isSignupButtonDisabled} onClick={handleSignup}>
          Zarejestruj się
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
