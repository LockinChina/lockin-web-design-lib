/* eslint-disable react/prop-types */

import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';


export interface MenuItemProps {
  className?: string;
  index?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (index: string) => void;
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {index, disabled, className, children, style, onClick} = props;
  const context = useContext(MenuContext);
  const classes = classNames( 'item', className, {
    'disabled': disabled,
    'actived': context.index == index,
  });

  const handelClick = () => {
    if (!disabled && context.onSelect && typeof(index) === 'string' ) {
      context.onSelect(index);
      if (onClick) {
        onClick(index);
      }
    }
  };

  return (
    <li className={classes} onClick={handelClick} style={style}>{children}</li>
  );
};

// MenuItem.displayName = 'MenuItem';

export default MenuItem;
