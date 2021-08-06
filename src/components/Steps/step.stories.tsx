
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {Steps, Icon} from '../../index';
// import {StpesComponent} from './index';


export default {
  title: 'Components/Steps',
  component: Steps,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;


export const Default = () => {
  return (
    <div style={{width: '500px'}}>
      <Steps selectIndex={0}>
        <Steps.Item stepTitle={'Step1'}>Stpe1 content</Steps.Item>
        <Steps.Item stepTitle={'Step2'}>Stpe2 content</Steps.Item>
        <Steps.Item stepTitle={'Step3'}>Stpe3 content</Steps.Item>
      </Steps>
    </div>
  )
}
export const Custom = () => {
  return (
    <div style={{width: '500px'}}>
      <Steps selectIndex={1}>
        <Steps.Item stepTitle={<div>Step1<br/>验证身份</div>}>
          <p style={{color: 'red'}}>我是红色</p>
        </Steps.Item>
        <Steps.Item stepTitle={<div>Step2<br/>找回密码</div>}>
          <p style={{fontWeight: 'bold', fontSize: '30px'}}>我想大就大</p>
        </Steps.Item>
        <Steps.Item stepTitle={<div>Step3<br/>完成</div>}>
          <p><Icon icon="coffee" color="brown" /> 来杯咖啡？</p>
        </Steps.Item>
      </Steps>
    </div>
  )
}
