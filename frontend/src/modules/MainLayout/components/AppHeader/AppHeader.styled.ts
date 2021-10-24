import styled from 'styled-components';

export const HeaderBody = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.accent};
  position: sticky;
  top: 0;
`;
