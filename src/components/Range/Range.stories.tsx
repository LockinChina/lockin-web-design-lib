
import React from 'react';

import {Meta} from '@storybook/react';

import Range from './index';

export default {
  component: Range,
  title: 'Components/Range',
} as Meta;

export const Primary: React.VFC<{}> = () => <div style={{width: '400px'}}><Range locale="zh"  defaultValue={['无工作经验', '一年']}  /></div>;
