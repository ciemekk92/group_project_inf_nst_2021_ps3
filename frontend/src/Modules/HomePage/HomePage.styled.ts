import styled from 'styled-components';

export const TilesContainer = styled.div`
  width: 90rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 15rem;
  padding: 5rem 2rem;
  border-radius: 0.5rem;
`;

export const TilesRow = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`;
