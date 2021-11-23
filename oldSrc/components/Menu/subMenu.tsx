/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './menuItem';
import {MenuContext} from './menu';
import Icon from '../Icon';

export interface SubMenuProps {
  title: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
  index?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {title, disabled, children, style, className, index} = props;
  const context = useContext(MenuContext);
  const classes = classNames('item', 'subMenuItem', className, {
    'disabled': disabled,
    'actived': index === context.index,
  });

  const renderSubMenu = () => {
    const ChildrenMap = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      }
    });
    return (
      <ul className="menu-subMenu">
        {ChildrenMap}
      </ul>
    );
  };
  const handelClick = () => {
    if (typeof(index) === 'string' && !disabled && context.onSelect) {
      context.onSelect(index);
    }
  };
  return (
    <li key={index} className={classes} style={style} onClick={handelClick}>
      <div>{title} <Icon icon="angle-down" className="arrow-icon"/></div>
      {renderSubMenu()}
    </li>
  );
};

export default SubMenu;
