
import React from 'react';

import {Meta} from '@storybook/react';

import Empty from './index';

export default {
  component: Empty,
  title: 'Components/Empty',
} as Meta;

export const Primary: React.VFC<{}> = () => <Empty message="没东西" />;
