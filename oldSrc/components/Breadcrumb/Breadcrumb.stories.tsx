import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import { BreadcrumbProps } from './Breadcrumb';
import { Breadcrumbs, Icon } from '../../index';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumbs,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BreadcrumbProps> = (args) => <Breadcrumbs {...args} />;


export const Default = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a href='###'>Events</a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a href='###'>My Resume</a>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

export const Custom = () => {
  return (
    <Breadcrumbs>
      <Breadcrumbs.Item>
      <Icon icon="home" color="#555" /> Home
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a style={{fontWeight: 'bold', fontSize: '18px'}} href='###'>
          <Icon icon="star" color="#555"/>{' '}
          Events <span style={{fontSize: '12px', color: 'red'}}> Hot</span>
        </a>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>
        <a href='###'> <Icon icon="pencil-alt" color="#555" /> My Resume</a>
      </Breadcrumbs.Item>
    </Breadcrumbs>
  )
}

