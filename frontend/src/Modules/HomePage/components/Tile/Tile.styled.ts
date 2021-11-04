import styled from 'styled-components';

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.primaryTransparent};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  user-select: none;
  transition: all 0.4s ease;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-0.3rem);
    background-color: ${(props) => props.theme.primary};
  }

  & p {
    opacity: 1;
    font-size: 1.3rem;
  }
`;
