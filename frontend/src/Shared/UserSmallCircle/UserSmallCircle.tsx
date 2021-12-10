import React from 'react';
import { CircleContainer, UserImage } from './UserSmallCircle.styled';

interface Props {
  label: string;
  image?: Nullable<string>;
}

export const UserSmallCircle = ({ label, image }: Props): JSX.Element => {
  return (
    <CircleContainer title={label}>
      <UserImage src={image ? image : '/user_placeholder.png'} alt={label} />
    </CircleContainer>
  );
};
