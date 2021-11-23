import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {BtnProps} from './Button';
import {Button, Icon} from '../../index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BtnProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {children: 'Primary', buttonType: "primary"};

export const ButtonHasIcon = Template.bind({});
ButtonHasIcon.args = {
  children: <div>
    <Icon icon="coffee" color="green" /> Dark 
    <Icon icon="dog" color="white" />
  </div>,
  buttonType: "dark",
};

export const Hollow = Template.bind({});
Hollow.args = {children: 'Hollow ', buttonType: "success", hollow: true};

export const Disabled = Template.bind({});
Disabled.args = {children: 'Hollow ', buttonType: "success", hollow: true, disabled: true};

// export const Light = Template.bind({});
// Light.args = {children: 'Light ', buttonType: "light"};

// export const Danger = Template.bind({});
// Danger.args = {children: 'Danger ', buttonType: "danger"};

// export const Warning = Template.bind({});
// Warning.args = {children: 'Warning ', buttonType: "warning"};

// export const Success = Template.bind({});
// Success.args = {children: 'Success ', buttonType: "success"};

// export const Info = Template.bind({});
// Info.args = {children: 'Info ', buttonType: "info"};