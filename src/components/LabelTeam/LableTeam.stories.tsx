
import React from 'react';

import {Meta} from '@storybook/react';

import LabelItem from './index';

export default {
  component: LabelItem,
  title: 'Components/LabelItem',
} as Meta;

export const Primary: React.VFC<{}> = () => <LabelItem
 listData= {[{name: '北京', id: 0}, {name: '上海', id: 2}]}
 />;
