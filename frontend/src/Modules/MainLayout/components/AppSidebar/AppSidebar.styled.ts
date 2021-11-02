import styled from 'styled-components';

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${(props) => props.theme.primary};
  padding: 1rem;
  width: 6rem;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  transition: width 0.3s ease;

  &:hover {
    width: 20rem;
    overflow: visible;
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
`;

export const SidebarListItem = styled.li`
  position: relative;
  display: block;
  width: 20rem;
  white-space: pre-wrap;
  margin-left: 0.8rem;
`;
