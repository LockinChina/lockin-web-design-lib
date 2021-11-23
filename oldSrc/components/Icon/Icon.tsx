import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export type IconProps = FontAwesomeIconProps;

export const Icon: React.FC<FontAwesomeIconProps> = (props) => {
  const {...restProps} = props;

  return <FontAwesomeIcon {...restProps} />;
};
