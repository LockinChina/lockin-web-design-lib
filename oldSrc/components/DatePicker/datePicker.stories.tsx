import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import DatePicker, {DatePickerProps} from './index';


export default {
  title: 'Components/DatePicker', 
  component: DatePicker,
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<DatePickerProps> = (args) => <DatePicker style={{width: '400px'}} {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  placeholder: "请选择",
  readOnly: true,
  dateType: 'now',
  // disabled: true,
  onSelectCallback: date => console.log(date),
  hasDay: true,
  defaultValue: '2020-08',
  timeout: 0
};