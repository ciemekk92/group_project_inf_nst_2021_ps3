import React from 'react';
import { StyledButtonOutline } from './ButtonOutline.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  borderColor?: string;
}

export const ButtonOutline = ({ children, borderColor }: Props): JSX.Element => {
  return <StyledButtonOutline borderColor={borderColor}>{children}</StyledButtonOutline>;
};
