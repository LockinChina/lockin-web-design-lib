import React from 'react';
import {Button} from '../components/Button';
export default {
  title: '按钮 Story 组',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};
const Template = (args) => <Button {...args}/>;
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
