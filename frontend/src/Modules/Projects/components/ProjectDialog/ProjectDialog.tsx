import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, ContainerProps } from 'Hooks/useDialog';
import { Container as LoadingContainer } from 'Hooks/useLoading';
import { ApplicationState } from 'Stores/store';
import { actionCreators, Project } from 'Stores/Project';
import { Heading5 } from 'Shared/Typography';
import { FormField } from 'Shared/FormField';
import { TextInput } from 'Shared/TextInput';
import { TextArea } from 'Shared/TextArea';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { PROJECT_DIALOG_MODE } from '../../fixtures';
import { ButtonContainer, DialogWrapper } from './ProjectDialog.styled';
import { updateObject } from '../../../../Utils/updateObject';

interface Props {
  handleClose: VoidFunctionNoArgs;
  getContainerProps: () => ContainerProps & {
    onClick?: VoidFunctionNoArgs;
    onKeyDown?: VoidFunctionNoArgs;
  };
  projectId: Id;
  mode: PROJECT_DIALOG_MODE;
}

export const ProjectDialog = ({
  handleClose,
  getContainerProps,
  projectId,
  mode
}: Props): JSX.Element => {
  const dispatch = useDispatch();
  const projectStoreData = useSelector((state: ApplicationState) => state.project?.project);
  const isLoading = useSelector((state: ApplicationState) => state.project?.isLoading);

  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (mode === PROJECT_DIALOG_MODE.EDIT) {
      dispatch(actionCreators.getProject(projectId));
    }
  }, []);

  const initialProjectData: Project = {
    id: '',
    name: '',
    description: '',
    issues: [],
    createdAt: '',
    updatedAt: '',
    users: []
  };

  const [projectData, setProjectData] = React.useState<Project>(
    projectStoreData ? projectStoreData : initialProjectData
  );

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [projectData.name]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const { target } = event;

    setProjectData(
      updateObject(projectData, {
        [target.name]: target.value
      })
    );
  };

  const onSubmit = async () => {
    try {
      if (mode === PROJECT_DIALOG_MODE.EDIT) {
        await dispatch(actionCreators.updateProject(projectData));
      }

      if (mode === PROJECT_DIALOG_MODE.ADD) {
        await dispatch(actionCreators.createProject(projectData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container key={projectId} {...getContainerProps()}>
      <DialogWrapper>
        {isLoading ? (
          <LoadingContainer isLoading={isLoading} />
        ) : (
          <React.Fragment key={projectId}>
            <Heading5>Edytuj projekt</Heading5>
            <FormField label="Nazwa projektu">
              <TextInput
                ref={ref}
                key={projectData.name}
                name="name"
                value={projectData.name}
                onChange={onChange}
              />
            </FormField>
            <FormField label="Opis projektu">
              <TextArea
                key={projectData.description}
                name="description"
                value={projectData.description}
                onChange={onChange}
              />
            </FormField>
            <ButtonContainer>
              <ButtonFilled onClick={onSubmit}>Zapisz</ButtonFilled>
              <ButtonOutline onClick={handleClose}>Anuluj</ButtonOutline>
            </ButtonContainer>
          </React.Fragment>
        )}
      </DialogWrapper>
    </Container>
  );
};
