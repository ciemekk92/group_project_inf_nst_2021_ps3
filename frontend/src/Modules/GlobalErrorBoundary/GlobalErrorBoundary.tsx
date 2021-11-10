import React from 'react';
import { Heading4 } from 'Shared/Typography';
import { IconOutline } from 'Shared/IconOutline';
import { ICON_SIZE } from 'Shared/constants';
import { HorizontalPageWrapper } from 'Shared/PageWrappers';
import { BoundaryWrapper } from './GlobalErrorBoundary.styled';

interface Props {}

interface State {
  hasError: boolean;
}

export class GlobalErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <BoundaryWrapper>
          <HorizontalPageWrapper>
            <IconOutline iconName="warning" iconSize={ICON_SIZE.XXL} />
            <Heading4>Ups! Coś poszło nie tak :(</Heading4>
          </HorizontalPageWrapper>
          <p>
            Spróbuj odświeżyć stronę, jeśli to nie pomoże, skontaktuj się z administratorem strony.
          </p>
        </BoundaryWrapper>
      );
    }

    return this.props.children;
  }
}
