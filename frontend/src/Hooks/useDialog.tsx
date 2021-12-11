import React from 'react';
import styled from 'styled-components';
import { TopPortal } from 'Shared/TopPortal';

interface ToggleProps {
  onClick?: () => void;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  onKeyDown?: () => void;
}

const stopPropagation = (event: React.SyntheticEvent) => event.stopPropagation();
const callAll =
  (...callbacks: Function[]) =>
  (...args: any[]) =>
    callbacks.forEach((callback) => callback && callback(...args));

export const useDialog = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const getToggleProps = (props: ToggleProps = {}) => ({
    'aria-controls': 'target',
    'aria-expanded': Boolean(isOpen),
    ...props,
    onClick: callAll(props.onClick ? props.onClick : () => null, handleToggle)
  });

  const getContainerProps = (props: ContainerProps = {}) => ({
    ...props,
    onClick: callAll(props.onClick ? props.onClick : () => null, handleToggle),
    onKeyDown: callAll(
      props.onKeyDown ? props.onKeyDown : () => null,
      ({ keyCode }: { keyCode: number }) => keyCode === 27 && handleClose()
    )
  });

  return {
    isOpen,
    handleOpen,
    handleClose,
    handleToggle,
    getToggleProps,
    getContainerProps
  };
};

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15500;
`;

const DialogContent = styled.div`
  max-width: 100%;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;
  z-index: 15501;
`;

export const Container = (props: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   }
  //   ref.current.focus();
  // });

  return (
    <TopPortal>
      <DialogOverlay {...props} ref={ref} aria-modal="true" tabIndex={-1}>
        <DialogContent onClick={stopPropagation}>{props.children}</DialogContent>
      </DialogOverlay>
    </TopPortal>
  );
};
