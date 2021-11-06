import styled from 'styled-components';

export const StyledSidebarItem = styled.div`
  height: 5.8em;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    padding-left: 0.4rem;
  }

  &:first-child {
    margin-top: 1.6rem;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  & span {
    margin-left: 1.4rem;
  }

  & p {
    font-size: 1.8rem;
    margin-left: 1rem;
  }
`;
