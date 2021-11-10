import styled from 'styled-components';

export const BoundaryWrapper = styled.div`
  text-align: center;
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem auto 0;
  padding: 5rem 0;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.primaryTransparent};
  transition: all 0.4s ease;

  & p {
    font-size: 1.4rem;
  }
`;
