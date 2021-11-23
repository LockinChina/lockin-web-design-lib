import React, {useState, createContext} from 'react';
import MenuContent from './style';
import classNames from 'classnames';
import {MenuItemProps} from './menuItem';
import GolbalStyle from '../globalStyle';

export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  defaultActiveIndex?: string;
  onSelect?: (selectedIndex: string) => void;
}

interface MenuContextProps {
  index: string;
  onSelect?: (selectedIndex: string) => void;
}

export const MenuContext = createContext<MenuContextProps>({index: '0'});


const Menu: React.FC<MenuProps> = (props) => {
  const {children, className, style, defaultActiveIndex, onSelect} = props;

  const [activedIndex, setActiveIndex] = useState(defaultActiveIndex);

  const classes = classNames(className, {

  });

  const handelClick = (index: string) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: MenuContextProps = {
    index: activedIndex || '0',
    onSelect: handelClick,
  };


  const renderMenu = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const {displayName} = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      }
      return null;
    });
  };


  return (
    <>
      <MenuContent
        style={style}
        className={classes}
      >
        <MenuContext.Provider value={passedContext}>
          {renderMenu()}
        </MenuContext.Provider>
      </MenuContent>
      <GolbalStyle />
    </>
  );
};

export default Menu;
