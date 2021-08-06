
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import Slider, {SliderProps} from './index';


export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SliderProps> = (args) => <Slider {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  style: {width: '400px'},
  value: 40,
  min: 0,
  max: 100,
  disabled: false,
  onSelectCallback: value => console.log(value),
};
