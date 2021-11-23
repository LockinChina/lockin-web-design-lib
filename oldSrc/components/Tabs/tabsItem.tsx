/* eslint-disable no-unused-vars */

import React, {FC} from 'react';
import PropTypes from 'prop-types';

export interface TabsItemProps {
  label: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode,
}

export const TabsItem: FC<TabsItemProps> = (props) => {
  const {children} = props;
  return <>{children}</>;
};

TabsItem.propTypes = {
  label: PropTypes.node,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
