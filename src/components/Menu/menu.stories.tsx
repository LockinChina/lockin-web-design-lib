import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {Menu} from '../../index';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
  parameters: { 
    docs: { 
      page: null 
    } 
  },
} as Meta;


export const Default = () => {
  return (
    <Menu defaultActiveIndex={'0'} >
      <Menu.Item>Tab1</Menu.Item>
      <Menu.SubMenu title="Tab2">
        <Menu.Item>Tab2 text 1</Menu.Item>
        <Menu.Item>Tab2 text 2</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}
