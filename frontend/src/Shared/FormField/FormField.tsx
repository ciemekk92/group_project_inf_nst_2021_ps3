import React from 'react';
import { FormFieldLabel, FormFieldWrapper } from './FormField.styled';

interface Props {
  label: string;
  children: React.ReactNode;
}

export const FormField = ({ label, children }: Props): JSX.Element => {
  return (
    <FormFieldWrapper>
      <FormFieldLabel>{label}</FormFieldLabel>
      {children}
    </FormFieldWrapper>
  );
};
