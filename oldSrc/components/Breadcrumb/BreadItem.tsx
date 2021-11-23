import React from 'react';

export interface breadItemProps {}

export const BreadItem: React.FC = (props) => {
  // eslint-disable-next-line react/prop-types
  const {children} = props;
  return <span>{children}</span>;
};
