import styled from 'styled-components';

export const LoginWrapper = styled.div`
  text-align: center;
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem auto 0;
  padding: 2rem 0 5rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.primaryTransparent};
  transition: all 0.4s ease;

  & h3,
  h6 {
    margin: 5rem 0;
  }

  & h6 {
    padding: 0 2rem;
  }

  & input {
    width: 80%;
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.primary};
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;

  & button {
    width: 80%;
    margin-bottom: 2rem;
  }
`;
