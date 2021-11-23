
import React from 'react';

import {Meta} from '@storybook/react';

import Input from './index';

export default {
  component: Input,
  title: 'Components/Input',
} as Meta;

export const Primary: React.VFC<{}> = () => <Input leftIconName="icongongsi1" />;
