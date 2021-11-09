import React from 'react';

import { RouteComponentProps } from 'react-router';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { StyledLink } from 'Shared/StyledLink';
import { TextInput } from 'Shared/TextInput';
import { Heading3 } from 'Shared/Typography';
import { updateObject } from 'Utils/updateObject';

import { LoginWrapper, ButtonsContainer } from './Login.styled';

interface Props extends RouteComponentProps {
  handleUserChange: VoidFunctionNoArgs;
}

interface LoginData {
  email: string;
  password: string;
}

export const Login = ({ handleUserChange }: Props): JSX.Element => {
  const initialData: LoginData = {
    email: '',
    password: ''
  };

  const [data, setData] = React.useState<LoginData>(initialData);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  const obj = {};

  return (
    <LoginWrapper>
      <Heading3>LOGOWANIE</Heading3>
      <TextInput name="email" placeholder="E-mail" onChange={onChange} />
      <TextInput type="password" name="password" placeholder="Hasło" onChange={onChange} />
      <ButtonsContainer>
        <ButtonFilled onClick={handleUserChange}>
          <StyledLink replace to={'/'}>
            Zaloguj się
          </StyledLink>
        </ButtonFilled>
        <ButtonOutline>
          {obj}
          <StyledLink replace to={'/signup'}>
            Rejestracja
          </StyledLink>
        </ButtonOutline>
        <ButtonOutline>
          <StyledLink replace to={'/reset-password'}>
            Zapomniałem hasła
          </StyledLink>
        </ButtonOutline>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
