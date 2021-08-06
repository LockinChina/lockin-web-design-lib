/* eslint-disable no-unused-vars */
import React from 'react';
import Menus, {MenuProps} from './menu';
import MenuItem, {MenuItemProps} from './menuItem';
import SubMenu, {SubMenuProps} from './subMenu';

export type MenuConent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>,
  SubMenu: React.FC<SubMenuProps>
}

const Menu = Menus as MenuConent;

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

export default Menu;
