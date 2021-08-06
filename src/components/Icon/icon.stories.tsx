
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import Icon from '../../components/Icon';
import {IconProps} from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <Icon {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  icon:"coffee",
  color: 'red',
  size:'1x',
};
