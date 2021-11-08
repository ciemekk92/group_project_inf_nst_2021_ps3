import React from 'react';
import { ButtonsContainer, LoginWrapper } from 'Modules/Login/Login.styled';
import { Heading3 } from 'Shared/Typography';
import { TextInput } from 'Shared/TextInput';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { updateObject } from 'Utils/updateObject';

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

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(updateObject(data, { [target.name]: target.value }));
  };

  return (
    <LoginWrapper>
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
        <ButtonFilled>Zarejestruj się</ButtonFilled>
        <ButtonOutline>Wróć</ButtonOutline>
      </ButtonsContainer>
    </LoginWrapper>
  );
};
