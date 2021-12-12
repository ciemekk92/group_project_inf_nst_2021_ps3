import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  user-select: none;
  margin-left: 1.5rem;

  & span {
    border-radius: 50%;
    transition: all 0.4s ease;
    cursor: pointer;
    margin-top: 0.2rem;

    &:hover {
      background-color: ${(props) => props.theme.primary};
    }
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  right: 15rem;
  z-index: 10;
  width: 100%;
  max-height: 20rem;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 2px 5px -1px ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.primary};
  font-weight: 700;
  text-align: left;
  -webkit-overflow-scrolling: touch;
`;

export const DropdownItem = styled.button`
  display: inline-flex;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  border: none;
  align-items: center;
  overflow: hidden;
  width: 15rem;
  padding: 0.3rem 0.5rem;
  font-size: 1.5rem;
  line-height: 1.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: all 0.4s ease;

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & span {
    margin: 0 2rem 0 1rem;

    &:hover {
      background-color: inherit;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.disabled};
  }
`;
