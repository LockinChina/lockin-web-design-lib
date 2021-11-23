
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import { NoContent} from '../../index';
import { NoCProps } from './noContent';

export default {
  title: 'Components/NoContent',
  component: NoContent,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<NoCProps> = (args) => <NoContent {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});

export const Custom  = Template.bind({});

Custom.args = {
  messageText: 'This is an empty content',
  size: '2x',
  color: 'green',
  icon: 'cat',
}
