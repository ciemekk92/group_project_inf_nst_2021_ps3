import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { StyledLink } from 'Shared/StyledLink';
import { TextInput } from 'Shared/TextInput';
import { Heading3 } from 'Shared/Typography';
import { updateObject } from 'Utils/updateObject';
import { actionCreators } from 'Stores/User';
import { ApplicationState } from 'Stores/store';
import { Container } from 'Hooks/useLoading';

import { LoginWrapper, ButtonsContainer } from './Login.styled';

interface LoginData {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const initialData: LoginData = {
    email: '',
    password: ''
  };

  const isLoading = useSelector(
    (state: ApplicationState) => (state.user ? state.user.isLoading : false),
    shallowEqual
  );

  const dispatch = useDispatch();

  const [data, setData] = React.useState<LoginData>(initialData);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  const handleLogin = async () => {
    await dispatch(actionCreators.loginUser(data));
  };

  return (
    <React.Fragment>
      <Container isLoading={isLoading} />
      <LoginWrapper>
        <Heading3>LOGOWANIE</Heading3>
        <TextInput name="email" placeholder="E-mail" onChange={onChange} />
        <TextInput type="password" name="password" placeholder="Hasło" onChange={onChange} />
        <ButtonsContainer>
          <ButtonFilled onClick={handleLogin}>Zaloguj się</ButtonFilled>
          <ButtonOutline>
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
    </React.Fragment>
  );
};
