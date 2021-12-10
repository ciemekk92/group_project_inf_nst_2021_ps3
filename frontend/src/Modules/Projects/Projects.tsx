import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { Heading4 } from 'Shared/Typography';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { actionCreators, Project } from 'Stores/Project';
import { ApplicationState } from 'Stores/store';
import { ProjectListItem } from './components/ProjectListItem/ProjectListItem';
import { ProjectsHeader, ProjectsListContainer, StyledContainer } from './Projects.styled';

export const Projects = (): JSX.Element => {
  const handleAddingProject = () => {};
  const handleEditingProject = (id: Id) => {};
  const handleDeletingProject = (id: Id) => {};

  const dispatch = useDispatch();
  const projectsData = useSelector((state: ApplicationState) => state.project?.projects);

  React.useEffect(() => {
    dispatch(actionCreators.getProjects());
  }, []);

  const renderProjectList = () => {
    if (projectsData) {
      return projectsData.map((project: Project) => (
        <ProjectListItem
          key={project.id}
          item={project}
          handleEdit={handleEditingProject}
          handleDelete={handleDeletingProject}
        />
      ));
    }

    return null;
  };

  return (
    <StyledContainer>
      <VerticalPageWrapper>
        <ProjectsHeader>
          <Heading4>Projekty</Heading4>
          <ButtonOutline onClick={handleAddingProject}>Dodaj nowy projekt</ButtonOutline>
        </ProjectsHeader>
        <ProjectsListContainer>{renderProjectList()}</ProjectsListContainer>
      </VerticalPageWrapper>
    </StyledContainer>
  );
};
