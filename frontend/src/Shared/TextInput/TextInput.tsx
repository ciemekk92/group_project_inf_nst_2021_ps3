import React from 'react';

import { StyledInput } from './TextInput.styled';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({ onChange, placeholder = 'Podaj wartość', ...props }: TextInputProps): JSX.Element => {
  return <StyledInput placeholder={placeholder} type="text" onChange={onChange} {...props} />;
};
