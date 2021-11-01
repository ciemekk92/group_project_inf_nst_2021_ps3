import React, { ChangeEventHandler } from 'react';
import classNames from 'classnames';
import { TEXT_SIZE } from 'Shared/constants';

interface TextInputProps extends React.HTMLAttributes<HTMLSpanElement> {
  textSize?: TEXT_SIZE;
  placeHolder?: string;
  myOnChangeEvent?: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({
  textSize = TEXT_SIZE.MEDIUM,
  placeHolder = '',
  myOnChangeEvent,
  ...props
}: TextInputProps): JSX.Element => {
  const finalClassName = classNames('material-text', {
    'md-18': textSize === TEXT_SIZE.SMALL,
    'md-24': textSize === TEXT_SIZE.MEDIUM,
    'md-36': textSize === TEXT_SIZE.LARGE,
    'md-48': textSize === TEXT_SIZE.XLARGE
  });

  return (
    <input
      type="text"
      className={finalClassName}
      onChange={myOnChangeEvent}
      placeholder={placeHolder}
    />
  );
};
