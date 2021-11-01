import styled from 'styled-components';
import { StyledButtonFilled } from '../ButtonFilled/ButtonFilled.styled';

interface Props {
  readonly borderColor?: string;
}

export const StyledButtonOutline = styled(StyledButtonFilled)<Props>`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.accent};
`;
