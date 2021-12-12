import React from 'react';

import { OptionsDropdown } from 'Shared/OptionsDropdown';
import { UserSmallCircle } from 'Shared/UserSmallCircle';
import { Project } from 'Stores/Project';
import {
  DetailsContainer,
  ItemContainer,
  Label,
  UserCirclesContainer
} from './ProjectListItem.styled';

interface Props {
  item: Project;
  handleEdit: (id: Id) => void;
  handleDelete: (id: Id) => void;
}

export const ProjectListItem = ({ item, handleEdit, handleDelete }: Props): JSX.Element => {
  const dropdownOptions = [
    {
      label: 'Edytuj',
      iconName: 'edit',
      onClick: () => handleEdit(item.id)
    },
    {
      label: 'Usuń',
      iconName: 'delete',
      onClick: () => handleDelete(item.id)
    }
  ];

  return (
    <ItemContainer>
      <Label>{item.name}</Label>
      <DetailsContainer>
        Uaktualniony: {item.updatedAt.substring(0, 10)}
        <UserCirclesContainer>
          {item.users.map((user) => (
            <UserSmallCircle key={user.id} label={user.displayName} image={user.profileImage} />
          ))}
        </UserCirclesContainer>
        <OptionsDropdown dropdownOptions={dropdownOptions} />
      </DetailsContainer>
    </ItemContainer>
  );
};
