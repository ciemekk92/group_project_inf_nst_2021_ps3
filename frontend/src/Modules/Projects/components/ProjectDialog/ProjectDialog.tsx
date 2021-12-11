import React from 'react';
import { Container, ContainerProps } from 'Hooks/useDialog';
import { Heading5 } from 'Shared/Typography';
import { FormField } from 'Shared/FormField';
import { TextInput } from 'Shared/TextInput';
import { TextArea } from 'Shared/TextArea';
import { PROJECT_DIALOG_MODE } from '../../fixtures';
import { DialogWrapper } from './ProjectDialog.styled';

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
  return (
    <Container {...getContainerProps()}>
      <DialogWrapper>
        <Heading5>Edytuj projekt</Heading5>
        <FormField label="Nazwa projektu">
          <TextInput onChange={() => {}} />
        </FormField>
        <FormField label="Opis projektu">
          <TextArea onChange={() => {}} />
        </FormField>
      </DialogWrapper>
    </Container>
  );
};
