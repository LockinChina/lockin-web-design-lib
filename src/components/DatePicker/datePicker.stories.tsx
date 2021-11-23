
import React from 'react';

import {Meta} from '@storybook/react';

import DatePicker  from './index';

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
} as Meta;

export const Primary: React.VFC<{}> = () => <DatePicker placeholder="请选择" />;
