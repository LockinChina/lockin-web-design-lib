
import React from 'react';

import {Meta} from '@storybook/react';

import SchoolSelect from './index';

export default {
  component: SchoolSelect,
  title: 'Components/SchoolSelect',
} as Meta;

export const Primary: React.VFC<{}> = () => <div style={{width: '400px'}}><SchoolSelect /></div>;
