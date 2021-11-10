import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly backgroundColor?: string;
}

export const StyledButtonFilled = styled.button<Props>`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.disabled
      : props.backgroundColor
      ? props.backgroundColor
      : props.theme.accent};
  border: none;
  font-size: 1.8rem;
  height: 3.6rem;
  min-width: 20rem;
  padding: 0 0.5rem;
  border-radius: 3rem;
  color: ${(props) => (props.disabled ? props.theme.disabledText : props.theme.text)};
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
  backface-visibility: visible;

  &:hover {
    background-color: ${(props) => (!props.disabled ? props.theme.accentLight : null)};
  }
`;
