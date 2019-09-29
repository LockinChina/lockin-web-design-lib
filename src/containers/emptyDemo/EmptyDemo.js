import React from 'react';
import Empty from '../../lib/Empty/Empty';
import { GrayBox, Ptit, Space, BtnSpace, Table } from '../../globalDemoStyle';

function EmptyDemo () {
  return (
    <div>
      <GrayBox>
        <Ptit>空状态:</Ptit>
        <Space />
        <Empty />
      </GrayBox>
      <Table className="w">
        <thead>
          <tr>
            <td>属性</td><td>说明</td><td>类型</td><td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr><td>message</td><td>提示文字</td><td>string</td><td>/</td></tr>
          <tr><td>link</td><td>链接</td><td>string</td><td>/</td></tr>
          <tr><td>blank</td><td>跳转方式  false: 当前页打开 true: 新页面打开 </td><td>boolean</td><td>false</td></tr>
        </tbody>
      </Table>
      <Space />
    </div>
  )
}


export default EmptyDemo;