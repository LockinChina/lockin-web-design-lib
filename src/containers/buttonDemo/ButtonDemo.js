/* eslint-disable no-alert */
import React from 'react';
import Button from '../../lib/Button/Button';
// import Toast from '../../lib/Toast/Toast';
import '../../static/css/animated.css';
import Toast from '../../lib/Toast/Toast';

import { GrayBox, Ptit, Space, BtnSpace, Table } from '../../globalDemoStyle';

export default function ButtonDemo() {
  return (
    <div>
      {/* <Toast msg="201" count={3} /> */}
      <GrayBox>
        <Ptit>按钮: </Ptit>
        <Space />
        {/* <InfoBox /> */}
        <BtnSpace>
          <Button
            titleName="默认样式"
            onClick={() => {
              Toast.info('xxx');
            }}
          />
          <Button titleName="样式-solid" solid />
          <Button
            titleName="自定义圆角"
            solid
            style={{ borderRadius: '20px' }}
          />
          <Button titleName="样式-hollow" hollow />
          <Button
            titleName="有图标"
            solid
            iconName="iconwechat"
            iconSize="20"
            iconColor="white"
          />
          <Button
            titleName="有图标"
            hollow
            iconName="iconwechat"
            iconSize="20"
            iconColor="green"
          />
          <Button titleName="我有点击事件" hollow onClick={val => alert(val)} />
          <Space />
          {/*
            
          */}
          <Button titleName="默认样式失效" invalid />
          <Button titleName="样式-solid失效" solid invalid />
          <Button
            titleName="自定义圆角失效"
            solid
            style={{ borderRadius: '20px' }}
            invalid
          />
          <Button titleName="样式-hollow失效" hollow invalid />
          <Button
            titleName="有图标失效"
            solid
            iconName="iconwechat"
            iconSize="20"
            iconColor="white"
            invalid
          />
          <Button
            titleName="有图标失效"
            hollow
            iconName="iconwechat"
            iconSize="20"
            iconColor="green"
            invalid
          />
          <Button
            titleName="我有点击事件失效"
            hollow
            onClick={val => alert(val)}
            invalid
          />
        </BtnSpace>
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
            <td>空</td>
            <td>什么都不传入是默认白色样式</td>
            <td>/</td>
            <td>/</td>
          </tr>
          <tr>
            <td>titleName</td>
            <td>按钮文字</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>solid, hollow</td>
            <td>solid: 蓝色实心 hollow: 空心</td>
            <td>string ,boolean</td>
            <td>/</td>
          </tr>
          <tr>
            <td>iconName</td>
            <td>
              iconfont图标名 不传值则不显示, 无iconName时 iconSize,
              iconColor无效{' '}
            </td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>iconSize</td>
            <td>iconfont图标大小设置 </td>
            <td>number</td>
            <td>14</td>
          </tr>
          <tr>
            <td>iconColor</td>
            <td>iconfont图标颜色设置 </td>
            <td>string</td>
            <td>gray</td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>按钮点击事件</td>
            <td>function</td>
            <td>/</td>
          </tr>
          <tr>
            <td>invalid</td>
            <td>按钮失效状态 并不可点击</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>style, className</td>
            <td>自定义按钮时可传入style 或者className继承修改 </td>
            <td>string,object</td>
            <td>/</td>
          </tr>
        </tbody>
      </Table>
      <Space />
    </div>
  );
}
