import styled from 'styled-components';

interface WrapperProps {
  readonly alignItems?: string;
}

export const VerticalPageWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  padding: 1rem;
`;

export const HorizontalPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
