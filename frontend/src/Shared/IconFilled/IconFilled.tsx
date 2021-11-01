import React from 'react';
import classNames from 'classnames';
import { ICON_SIZE } from 'Shared/constants';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  iconName: string;
  iconSize?: ICON_SIZE;
}

export const IconFilled = ({
  iconName,
  iconSize = ICON_SIZE.MEDIUM,
  ...props
}: Props): JSX.Element => {
  const finalClassName = classNames('material-icons', {
    'md-18': iconSize === ICON_SIZE.SMALL,
    'md-24': iconSize === ICON_SIZE.MEDIUM,
    'md-36': iconSize === ICON_SIZE.LARGE,
    'md-48': iconSize === ICON_SIZE.XLARGE
  });

  return (
    <span {...props} className={finalClassName}>
      {iconName}
    </span>
  );
};
