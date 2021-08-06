import React, {useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import { InputProps } from './input';
import {Input, Icon} from '../../index';

export default {
  title: 'Components/Input', 
  component: Input,
  // argTypes: {
  //   backgroundColor: {control: 'color'},
  // },
} as Meta;




// Create a master template for mapping args to render the Button component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { size: "large", placeholder: 'Please Input'};

export const HaveIcon = () => {
  // const [closeBtnVisible, setCloseBtnVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  }
  const clearValue = () => {
    setInputValue('');
  }
  return (
    <Input 
      style={{width: '300px'}}
      leftContent={<Icon icon="phone" color="#333" />}
      placeholder="请输入" 
      value={inputValue}
      onChange={(e) => handelChange(e)}
      rightContent={
        inputValue.length > 0 ? 
        <Icon onClick={() => clearValue()} style={{cursor: 'pointer'}} icon="times-circle" color="#333" /> 
        : ''
      }
    />
  )
};

// export const InputHaveIcon = Template.bind({});
// InputHaveIcon.args = {
//   size: "large", 
//   placeholder: 'Please Input', 
//   leftContent: <Icon icon="phone" color="#333" />, 
//   rightContent: <Icon style={{cursor: 'pointer'}} icon="times-circle" color="#333" />
// };