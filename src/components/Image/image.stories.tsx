
import React from 'react';

import {Meta} from '@storybook/react';

import Image from './index';

export default {
  component: Image,
  title: 'Components/Image',
} as Meta;

export const Primary: React.VFC<{}> = () => <Image />;
