import React, { useState, useEffect } from 'react';

import LoadingDemo from '../../lib/Loading/Loading';
import { GrayBox, Ptit, Space, Table } from '../../globalDemoStyle';
import Button from '../../lib/Button/Button';

let timer = null;

export default function DatePickerDemo() {
  const [mask, setMask] = useState(false);

  useEffect(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setMask(false);
    }, 3000);
  }, [mask]);

  return (
    <div>
      <GrayBox>
        <Ptit>Loading</Ptit>
        <Space />
        <Button
          hollow
          titleName="点我开始Loading..."
          onClick={() => setMask(true)}
        />
        {mask && <LoadingDemo message="我3秒后消失" />}
      </GrayBox>
      <Table className="w">
        <thead>
          <tr>
            <td>属性</td>
            <td>说明</td>
            <td>类型</td>
            <td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>transparent</td>
            <td>是否显示遮罩</td>
            <td>boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>opacity</td>
            <td>
              设置遮罩透明度 取值0-1 设置为0时等同于transparent={`{true}`}{' '}
            </td>
            <td>number</td>
            <td>0.2</td>
          </tr>
          <tr>
            <td>message</td>
            <td>提示文字</td>
            <td>string</td>
            <td>/</td>
          </tr>
        </tbody>
      </Table>
      <Space />
    </div>
  );
}
