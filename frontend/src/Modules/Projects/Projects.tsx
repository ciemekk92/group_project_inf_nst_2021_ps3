import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { Heading4 } from 'Shared/Typography';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { actionCreators, Project } from 'Stores/Project';
import { ApplicationState } from 'Stores/store';
import { useDialog } from 'Hooks/useDialog';
import { PROJECT_DIALOG_MODE } from './fixtures';
import { ProjectDialog, ProjectListItem } from './components';
import { ProjectsHeader, ProjectsListContainer, StyledContainer } from './Projects.styled';

export const Projects = (): JSX.Element => {
  const [projectId, setProjectId] = React.useState<Id>('');
  const [mode, setMode] = React.useState<PROJECT_DIALOG_MODE>(PROJECT_DIALOG_MODE.ADD);
  const { isOpen, handleOpen, handleClose, getToggleProps, getContainerProps } = useDialog();

  const handleAddingProject = () => {};

  const handleEditingProject = (id: Id) => {
    setProjectId(id);
    setMode(PROJECT_DIALOG_MODE.EDIT);
    handleOpen();
  };

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
          getDialogToggleProps={getToggleProps}
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
      {isOpen && (
        <ProjectDialog
          projectId={projectId}
          mode={mode}
          handleClose={handleClose}
          getContainerProps={getContainerProps}
        />
      )}
    </StyledContainer>
  );
};
