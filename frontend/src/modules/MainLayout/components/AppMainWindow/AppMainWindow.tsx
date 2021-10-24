import React from 'react';

import { MainWindowWrapper } from './AppMainWindow.styled';

interface Props {
  children: React.ReactNode;
}

export const AppMainWindow = (props: Props): JSX.Element => {
  return <MainWindowWrapper>{props.children}</MainWindowWrapper>;
};
