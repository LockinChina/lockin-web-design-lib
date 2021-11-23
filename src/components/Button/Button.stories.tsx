
import React from 'react';

import {Meta} from '@storybook/react';

import Button from './index';
import Toast from '../Toast/index';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Primary: React.VFC<{}> = () => <Button onClick={() => Toast.info('我是真的真的动了心', 2)}>Button</Button>;
