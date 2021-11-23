
import React from 'react';

import {Meta} from '@storybook/react';

import Slider from './index';

export default {
  component: Slider,
  title: 'Components/Slider',
} as Meta;

export const Primary: React.VFC<{}> = () => <div style={{width: '400px'}}><Slider defaultValue={23} lang="cn"  /></div>;
