import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 3.2rem;
  min-width: 24rem;
  border: 1px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.accent};
  }
`;
