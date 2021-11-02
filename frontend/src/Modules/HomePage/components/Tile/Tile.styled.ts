import styled from 'styled-components';

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  background-color: rgba(58, 63, 71, 0.4);
  cursor: pointer;
  user-select: none;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-0.3rem);
    background-color: rgba(58, 63, 71, 1);
  }

  & p {
    font-size: 1.3rem;
  }
`;
