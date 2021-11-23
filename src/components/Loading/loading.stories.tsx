
import React from 'react';

import {Meta} from '@storybook/react';

import Loading from './index';

export default {
  component: Loading,
  title: 'Components/Loading',
} as Meta;

export const Primary: React.VFC<{}> = () => <Loading opacity={0.3}  />;
