
import React from 'react';
import '../../static/iconfont/iconfont.css';

import {Meta} from '@storybook/react';

import BackUp from './index';

export default {
  component: BackUp,
  title: 'Components/BackUp',
} as Meta;

export const Primary: React.VFC<{}> = () => <div><div style={{height: '20000px'}}></div><BackUp /></div>;
