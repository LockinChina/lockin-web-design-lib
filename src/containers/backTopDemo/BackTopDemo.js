import React from 'react';

import BackTop from '../../lib/BackTop/BackTop';
import { GrayBox, Ptit, Space } from '../../globalDemoStyle';

function BackTopDemo() {
  return (
    <div style={{ height: '2000px' }}>
      <GrayBox>
        <Ptit>回到顶部:</Ptit>
        <Space />
        <Space />
        <p style={{ fontSize: '16px', textAlign: 'center' }}>向下滑动</p>
        <Space />
        <Space />
      </GrayBox>
      <BackTop />
    </div>
  );
}

export default BackTopDemo;
