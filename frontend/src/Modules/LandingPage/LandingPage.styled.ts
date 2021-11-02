import styled from 'styled-components';

export const LandingContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  margin-top: 10rem;
  text-align: center;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 30rem;
  justify-content: space-between;
  margin-top: 2rem;
`;
