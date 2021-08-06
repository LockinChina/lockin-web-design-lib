/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {FC, useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import {TabsItemProps} from './tabsItem';
import GlobalStyle from '../globalStyle';

const TabsContent = styled.div`
  .tabs-nav {
    display: flex;
    flex-direction: row;
    li {
      font-size: 16px;
      color: #222;
      cursor: pointer;
      font-weight: 500;
      margin-right: 18px;
      transition: all 0.2s ease-in;
      &.actived {
        color: rgb(0, 141, 223);
      }
      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
        cursor: no-drop;
      }
    }
  }
  .tabs-content {
  }
`;

export interface TabsProps {
  className?: string;
  defaultIndex?: number;
  onSelect?: (index: number) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
  const {children, className, defaultIndex, onSelect} = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const renderTabsNav = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        TabsItemProps
      >;
      const {label, disabled} = childElement.props;
      const tabClasses = classNames({
        disabled,
        actived: activeIndex === index,
      });

      const handelClick = () => {
        if (!disabled) {
          setActiveIndex(index);
          if (onSelect) {
            onSelect(index);
          }
        }
      };
      return (
        <li
          role="button"
          className={tabClasses}
          onClick={handelClick}
          onKeyPress={handelClick}
          tabIndex={0}
        >
          {label}
        </li>
      );
    });
  };

  const renderTabsContent = () => {
    return React.Children.map(children, (child, index) => {
      return activeIndex === index && child;
    });
  };

  return (
    <>
      <TabsContent className={className}>
        <ul className="tabs-nav">{renderTabsNav()}</ul>
        <div className="tabs-conent">{renderTabsContent()}</div>
      </TabsContent>
      <GlobalStyle/>
    </>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
};
