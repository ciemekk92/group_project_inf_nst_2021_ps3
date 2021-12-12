import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VerticalPageWrapper } from 'Shared/PageWrappers';
import { Heading4 } from 'Shared/Typography';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { actionCreators, Project } from 'Stores/Project';
import { ApplicationState } from 'Stores/store';
import { PROJECT_DIALOG_MODE } from './fixtures';
import { ProjectDialog, ProjectListItem } from './components';
import { ProjectsHeader, ProjectsListContainer, StyledContainer } from './Projects.styled';
import Modal from '@mui/material/Modal';
import { Container } from '../../Hooks/useLoading';

export const Projects = (): JSX.Element => {
  const [mode, setMode] = React.useState<PROJECT_DIALOG_MODE>(PROJECT_DIALOG_MODE.ADD);
  const [show, setShow] = React.useState<boolean>(false);

  const handleOpen = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleAddingProject = () => {};

  const handleDeletingProject = (id: Id) => {};

  const dispatch = useDispatch();
  const projectsData = useSelector((state: ApplicationState) => state.project?.projects);
  const isLoading = useSelector((state: ApplicationState) => state.project?.isLoading);

  React.useEffect(() => {
    dispatch(actionCreators.getProjects());
  }, []);

  const handleEditingProject = async (id: Id) => {
    setMode(PROJECT_DIALOG_MODE.EDIT);
    await dispatch(actionCreators.getProject(id));
    handleOpen();
  };

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
    <React.Fragment>
      <Container isLoading={isLoading!} />
      <StyledContainer>
        <VerticalPageWrapper>
          <ProjectsHeader>
            <Heading4>Projekty</Heading4>
            <ButtonOutline onClick={handleAddingProject}>Dodaj nowy projekt</ButtonOutline>
          </ProjectsHeader>
          <ProjectsListContainer>{renderProjectList()}</ProjectsListContainer>
        </VerticalPageWrapper>
      </StyledContainer>
      <Modal open={show} onClose={handleClose}>
        <ProjectDialog mode={mode} handleClose={handleClose} />
      </Modal>
    </React.Fragment>
  );
};
