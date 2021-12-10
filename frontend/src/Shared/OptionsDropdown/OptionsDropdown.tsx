import React from 'react';
import { IconFilled } from 'Shared/IconFilled';
import { ICON_SIZE } from 'Shared/constants';
import { useOutsideClick } from 'Hooks/useOutsideClick';

import { DropdownContainer, DropdownItem, DropdownListContainer } from './OptionsDropdown.styled';

interface DropdownOption {
  label: string;
  iconName: string;
  onClick: VoidFunctionNoArgs;
}

interface Props {
  dropdownOptions: DropdownOption[];
}

export const OptionsDropdown = ({ dropdownOptions }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleTogglingDropdown = () => setIsOpen(!isOpen);

  const handleClosingDropdown = () => setIsOpen(false);

  const renderOptions = () => {
    return dropdownOptions.map((option: DropdownOption) => (
      <DropdownItem key={option.label} onClick={option.onClick}>
        <IconFilled iconName={option.iconName} iconSize={ICON_SIZE.MEDIUM} />
        {option.label}
      </DropdownItem>
    ));
  };

  useOutsideClick(ref, handleClosingDropdown);

  return (
    <DropdownContainer ref={ref}>
      <IconFilled
        iconName="more_horiz"
        iconSize={ICON_SIZE.MEDIUM}
        onClick={handleTogglingDropdown}
      />
      <DropdownListContainer>{isOpen ? renderOptions() : null}</DropdownListContainer>
    </DropdownContainer>
  );
};
