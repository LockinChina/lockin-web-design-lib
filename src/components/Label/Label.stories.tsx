
import React from 'react';

import {Meta} from '@storybook/react';

import Label from './index';

export default {
  component: Label,
  title: 'Components/Label',
} as Meta;

export const Primary: React.VFC<{}> = () => <Label titleName="IT/互联网" />;
