import React from 'react';
import { StyledButtonFilled } from './ButtonFilled.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const ButtonFilled = ({ children, ...props }: Props): JSX.Element => {
  return <StyledButtonFilled {...props}>{children}</StyledButtonFilled>;
};
