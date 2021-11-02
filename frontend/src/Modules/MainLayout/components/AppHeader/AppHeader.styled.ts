import styled from 'styled-components';

export const HeaderBody = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.accent};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;

  & h1 {
    font-family: 'Distant Galaxy', 'sans-serif';
    font-size: 3.6rem;
    padding: 0 2rem;
    text-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
    user-select: none;
  }
`;
