import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  min-width: 24rem;
  height: 12rem;
  font-family: Lato, sans-serif;
  border: 1px solid ${(props) => props.theme.accent};
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.8rem;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.accent};
  }
`;
