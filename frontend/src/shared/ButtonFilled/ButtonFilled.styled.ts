import styled from 'styled-components';

interface Props {
  readonly backgroundColor?: string;
}

export const StyledButtonFilled = styled.button<Props>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.accent};
  height: 3rem;
  min-width: 12rem;
  border-radius: 3rem;
  color: ${(props) => props.theme.text};
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
  backface-visibility: visible;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;
