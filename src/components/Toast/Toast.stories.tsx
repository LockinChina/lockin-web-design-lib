
import React from 'react';

import {Meta} from '@storybook/react';

import Button from '../Button/index';
import Toast from '../Toast/Toast';

export default {
  component: Button,
  title: 'Components/Toast',
} as Meta;

export const Primary: React.VFC<{}> = () => 
  <Button titleName="Click Me" onClick={() => Toast.info('Toast')} />
;
