import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import CascadeSelect, {CascadeProps} from './index';


export default {
  title: 'Components/CascadeSelect', 
  component: CascadeSelect,
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<CascadeProps> = (args) => <CascadeSelect style={{width: '400px'}} {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  placeholder: "请选择",
  // readOnly: true,
  disabled: true,
  col: 3,
  timeout: 0,
  dataApi: [
    {
      label: '北京',
      value: 10010,
      children: [
        {
          label: '顺义',
          value: 1001001,
          children: [
            {
              label: '后沙峪',
              value: 100100101
            },
            {
              label: '杨镇',
              value: 100100102
            },
          ]
        },
        {
          label: '平谷',
          value: 1001002,
          children: [
            {
              label: '马坊',
              value: 100100201
            },
            {
              label: '崔各庄',
              value: 100100202
            },
          ]
        },
        {
          label: '通州',
          value: 1001003,
        }
      ]
    },
    {
      label: '上海',
      value: 10011,
      children: [
        {
          label: '东方明珠',
          value: 100100101,
          children: [
            {
              label: '东方明珠电视塔',
              value: 100100101
            }
          ]
        },
      ]
    },
  ],
  // defaultValue: {label: '北京', value: 10010},
  onSelectCallback: item => console.log(item),
};