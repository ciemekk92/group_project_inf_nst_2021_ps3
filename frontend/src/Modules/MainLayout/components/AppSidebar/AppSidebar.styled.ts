import styled from 'styled-components';

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: ${(props) => props.theme.primaryTransparent};
  padding: 1rem 0;
  width: 7.2rem;
  height: 100%;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    width: 24rem;
    overflow: visible;
    background-color: ${(props) => props.theme.primary};
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
