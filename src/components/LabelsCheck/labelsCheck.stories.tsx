import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';

const data = [
  {label: '上海', value: 0},
  {label: '广州', value: 1},
  {label: '深圳', value: 2},
  {label: '北京', value: 3},
  {label: '苏州', value: 4},
  {label: '南京', value: 5},
];

import LabelsCheck, {LabelsCheckProps} from './index';

export default {
  title: 'Components/LabelsCheck',
  component: LabelsCheck,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<LabelsCheckProps> = (args) => <LabelsCheck {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  data: data,
  checkedValue: [0, 2],
  max: 3,
  readOnly: false,
  disabledArr: [1],
  onSelectCallback: arr => console.log(arr),
  size: 'default',
};