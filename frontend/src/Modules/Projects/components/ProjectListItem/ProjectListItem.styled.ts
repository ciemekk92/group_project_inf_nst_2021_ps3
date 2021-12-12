import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  font-size: 1.3rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const Label = styled.p`
  font-size: 1.6rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserCirclesContainer = styled.div`
  display: flex;
  margin-left: 1rem;

  & div:not(:first-child) {
    margin-left: -2rem;
    z-index: 0;
  }
`;
