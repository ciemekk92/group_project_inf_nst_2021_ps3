import styled from 'styled-components';

export const StyledContainer = styled.div`
  & h4 {
    align-self: flex-start;
    margin-left: 2rem;
  }
`;

export const ProjectsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ProjectsListContainer = styled.div`
  width: 95%;
  padding: 1rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryTransparent};
`;
