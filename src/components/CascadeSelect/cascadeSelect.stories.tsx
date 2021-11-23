
import React from 'react';

import {Meta} from '@storybook/react';

import CascadeSelect  from './index';

export default {
  component: CascadeSelect,
  title: 'Components/CascadeSelect',
} as Meta;

export const Primary: React.VFC<{}> = () => <CascadeSelect placeholder="请选择" />;
