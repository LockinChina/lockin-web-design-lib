import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';


import Label, {LabelProps} from './index';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LabelProps> = (args) => <Label {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  size: 'small',
  onClick: () => alert(1),
  disabled: false,
  checked: false,
};

// export const Info = Template.bind({});
// Info.args = {children: 'Info ', buttonType: "info"};