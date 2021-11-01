import React from 'react';
import { ButtonFilled } from 'Shared/ButtonFilled';
import { ButtonOutline } from 'Shared/ButtonOutline';
import { Container, useDialog } from 'Hooks/useDialog';

export const Dashboard = (): JSX.Element => {
  const { isOpen, handleClose, getToggleProps, getContainerProps } = useDialog();
  return (
    <div>
      To jest dashboard
      <ButtonFilled {...getToggleProps()}>Włoncz dajlog</ButtonFilled>
      <ButtonOutline>Outline button</ButtonOutline>
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
