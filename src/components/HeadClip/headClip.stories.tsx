
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import HeadClip, { HeadClipProps } from './index';


export default {
  title: 'Components/HeadClip',
  component: HeadClip,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<HeadClipProps> = (args) => <HeadClip {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  visible: true,
};
