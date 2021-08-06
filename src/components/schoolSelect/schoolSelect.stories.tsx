import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import SchoolSelect, {SchoolSelectProps} from '../schoolSelect/schoolSelect';

export default {
  title: 'Components/SchoolSelect', 
  component: SchoolSelect,
  // argTypes: {
  //   backgroundColor: {control: 'color'},
  // },
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<SchoolSelectProps> = (args) => <SchoolSelect style={{width: '400px'}} {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { size: "small", placeholder: '请输入选择学校', defaultValue: '', onSelect:obj => console.log(obj), };