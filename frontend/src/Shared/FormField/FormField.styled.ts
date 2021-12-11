import styled from 'styled-components';

export const FormFieldWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormFieldLabel = styled.p`
  width: 25rem;
  font-size: 1.8rem;
`;
