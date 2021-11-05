import React from 'react';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { Container, useDialog } from 'Hooks/useDialog';
import { TextInput } from 'Shared/TextInput/TextInput';

export const Dashboard = (): JSX.Element => {
  const { isOpen, handleClose, getToggleProps, getContainerProps } = useDialog();
  const [value, setValue] = React.useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return (
    <div>
      To jest dashboard
      <ButtonFilled {...getToggleProps()}>Włoncz dajlog</ButtonFilled>
      <ButtonOutline>Outline button</ButtonOutline>
      <TextInput value={value} onChange={onChange} />
      {isOpen && (
        <Container {...getContainerProps()}>
          <header>Tytuł</header>
          <div>DZIALA!!</div>
          <footer>
            <ButtonOutline onClick={handleClose}>Wyłoncz</ButtonOutline>
          </footer>
        </Container>
      )}
    </div>
  );
};
