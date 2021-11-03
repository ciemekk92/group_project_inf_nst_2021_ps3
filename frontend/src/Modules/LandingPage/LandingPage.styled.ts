import styled from 'styled-components';

export const LandingContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-top: 10rem;
  text-align: center;
  background-color: ${(props) => props.theme.primaryTransparent};
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.2);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-between;
  margin-top: 2rem;
`;
