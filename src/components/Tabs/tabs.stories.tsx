
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {Tabs, Icon} from '../../index';
import styled from 'styled-components';

const TabContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  margin-top: 14px;
`;
const TabContent1 = styled.div`
  padding: 20px;
  background: black;
  border-radius: 10px;
  color: #fff;
  margin-top: 14px;
`;

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = (args) => <Tabs {...args} />;


// Reuse that template for creating different stories

export const Default = () => {
  return (
    <Tabs defaultIndex={0} >
      <Tabs.Item label="Tab One">
        <p style={{padding: '10px', marginTop: '20px', border: '1px solid #ccc'}}>This is Tab one content</p>
      </Tabs.Item>
      <Tabs.Item label="Tab Two">
        <p style={{padding: '10px', marginTop: '20px', border: '1px solid #ccc'}}>This is Tab two content</p>
      </Tabs.Item>
    </Tabs>
  )
}

export const Custom = () => {
  return (
    <Tabs defaultIndex={0} >
      <Tabs.Item label={<div><Icon icon="code-branch" /> Tab One </div>}>
        <TabContent>This is Tab one content</TabContent>
      </Tabs.Item>
      <Tabs.Item disabled label={<div><Icon icon="ban" /> <span>Tab Two</span> </div>}>
        <p style={{padding: '10px', marginTop: '20px', border: '1px solid #ccc'}}>This is Tab two content</p>
      </Tabs.Item>
      <Tabs.Item  label={<div><Icon icon="chart-line" /> <span>Tab Three</span> </div>}>
        <TabContent1>This is Tab three content</TabContent1>
      </Tabs.Item>
    </Tabs>
  )
}
