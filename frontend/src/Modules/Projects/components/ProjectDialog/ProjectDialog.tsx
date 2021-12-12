import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from 'Stores/store';
import { actionCreators, Project } from 'Stores/Project';
import { Heading5 } from 'Shared/Typography';
import { FormField } from 'Shared/FormField';
import { TextInput } from 'Shared/TextInput';
import { TextArea } from 'Shared/TextArea';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { updateObject } from 'Utils/updateObject';
import { PROJECT_DIALOG_MODE } from '../../fixtures';
import { ButtonContainer, DialogWrapper } from './ProjectDialog.styled';

interface Props {
  handleClose: VoidFunctionNoArgs;
  mode: PROJECT_DIALOG_MODE;
}

export const ProjectDialog = ({ handleClose, mode }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const projectStoreData = useSelector((state: ApplicationState) => state.project?.project);

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
    <DialogWrapper>
      <Heading5>Edytuj projekt</Heading5>
      <FormField label="Nazwa projektu">
        <TextInput name="name" value={projectData.name} onChange={onChange} />
      </FormField>
      <FormField label="Opis projektu">
        <TextArea name="description" value={projectData.description} onChange={onChange} />
      </FormField>
      <ButtonContainer>
        <ButtonFilled onClick={onSubmit}>Zapisz</ButtonFilled>
        <ButtonOutline onClick={handleClose}>Anuluj</ButtonOutline>
      </ButtonContainer>
    </DialogWrapper>
  );
};
