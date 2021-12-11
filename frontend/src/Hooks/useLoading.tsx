import React from 'react';
import styled from 'styled-components';
import { TopPortal } from 'Shared/TopPortal';
import { Preloader } from 'Shared/Preloader';

export const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading
  };
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.secondaryTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15500;

  & circle.bg {
    stroke: ${(props) => props.theme.loading};
    z-index: 15501;
  }
`;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}

export const Container = ({ isLoading, ...props }: ContainerProps): JSX.Element | null => {
  const ref = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   if (!ref.current) {
  //     return;
  //   }
  //
  //   ref.current.focus();
  // });

  return isLoading ? (
    <TopPortal>
      <Overlay {...props}>
        <Preloader />
      </Overlay>
    </TopPortal>
  ) : null;
};
