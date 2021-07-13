import React from 'react';
import {Story, Meta} from '@storybook/react';

import {Button, ButtonProps} from '../components/Button';

export default {
  title: '按钮 Story 组',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;


export const BackColor = Template.bind({});
BackColor.args = {
  size: 'large',
  label: 'Red Button',
  backgroundColor: 'red',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};
