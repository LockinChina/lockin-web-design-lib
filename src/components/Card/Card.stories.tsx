import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import Card, { CardProps } from './card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  children: '默认样式',
  onClick: () => alert(1),
  style: {},
  disabled: false,
  className: "",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = { 
  children: <span style={{color: 'white'}}>自定义样式</span>,
  onClick: () => alert(2),
  style: {padding: '50px', borderRadius: '0px', backgroundColor: 'green'}
};
