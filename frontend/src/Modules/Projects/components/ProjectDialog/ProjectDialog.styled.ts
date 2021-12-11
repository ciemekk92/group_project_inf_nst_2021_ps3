import styled from 'styled-components';

export const DialogWrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  & h5 {
    margin-bottom: 1rem;
    padding: 1rem;
  }

  & input[type='text'],
  & textarea {
    width: 100%;
    resize: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;
