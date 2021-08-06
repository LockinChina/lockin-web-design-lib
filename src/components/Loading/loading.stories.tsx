import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import Loading ,{LoadingProps} from '../Loading/loading';

export default {
  title: 'Components/Loading', 
  component: Loading,
  // argTypes: {
  //   backgroundColor: {control: 'color'},
  // },
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { size: "2x", color: 'green', mask: false };