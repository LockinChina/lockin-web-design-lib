/* eslint-disable no-console */
import React, { useState } from 'react';
import { GrayBox, Ptit, Space, Table } from '../../globalDemoStyle';

import Input from '../../lib/Input/Input';

export default function InputDemo() {
  const [passwordShowHide, setPasswordShowHide] = useState(false);
  return (
    <div>
      <GrayBox>
        <Ptit>文本框: </Ptit>
        <Space />
        <Input
          defaultValue="" // 初始值
          // width = {} // 设置长度
          maxLength={10} // 最大长度
          titleName="常规" // 标题
          placeholder="常规状态 请输入"
          onChange={e => console.log(e)} // 文本框onChange事件
          // value = ""  // 文本框value
          wrongText="" // 错误提示
          readOnly={false} // 只读
          lefeIconName="" // 左侧图标名称
          // lefeIconSize={} //左侧图标大小
          leftIconColor="" // 左侧图标颜色
          rightIconName="" // 右侧图标名称
          // rightIconSize={} //右侧图标大小
          rightIconColor="" // 右侧图标颜色
          rightIconOnClick={() => {}} // 右侧图标点击事件
          rightIconTitle="" // 右侧图标title (鼠标移入悬浮提示)
        />
        <Space />

        <Input defaultValue="无标题状态" placeholder="无标题状态 请输入" />

        <Space />

        <Input
          titleName="带左侧图标 并自定义长度和边框颜色"
          defaultValue=""
          width={400}
          placeholder="请输入微信号"
          leftIconName="iconwechat"
          leftIconColor="green"
          leftIconSize={24}
          inputBorderColor="green"
        />

        <Space />

        <Input
          titleName="带左右图标 (右侧图标可点击)"
          defaultValue=""
          placeholder="请输入密码"
          type={passwordShowHide ? 'type' : 'password'}
          leftIconName="iconmima"
          leftIconColor="#005ED4"
          leftIconSize={22}
          rightIconName={!passwordShowHide ? 'iconkejian' : 'iconbukejian'}
          rightIconColor="#005ED4"
          rightIconSize={20}
          rightIconOnClick={() => setPasswordShowHide(!passwordShowHide)}
          rightIconTitle={passwordShowHide ? '隐藏密码' : '显示密码'}
        />

        <Space />
        <Input
          titleName="有错误提示"
          defaultValue=""
          placeholder="请输入邮箱"
          leftIconName="iconyouxiang"
          leftIconColor="#005ED4"
          leftIconSize={15}
          wrongText="我是错误提示！"
          // inputBackgroundColor="red"
        />

        <Space />
        <Input
          titleName="只读状态"
          defaultValue="现在只能读不能写"
          placeholder="请输入密码"
          leftIconName="iconxinxi"
          leftIconColor="green"
          readOnly
        />
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
            <td>titleName</td>
            <td>标题 不传入则不显示</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>type</td>
            <td>文本类型: text password number tel mail...</td>
            <td>string</td>
            <td>text</td>
          </tr>
          <tr>
            <td>width</td>
            <td>设置文本框宽度</td>
            <td>number</td>
            <td>/</td>
          </tr>
          <tr>
            <td>maxLength</td>
            <td>设置文本最大长度</td>
            <td>number</td>
            <td>/</td>
          </tr>
          <tr>
            <td>defaultValue</td>
            <td>初始值</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>占位提示语</td>
            <td>string</td>
            <td>请输入</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>文本框onChange函数 带一个参数: 本文输入当前值</td>
            <td>function</td>
            <td>/</td>
          </tr>
          <tr>
            <td>value</td>
            <td>文本框value</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>wrongText</td>
            <td>错误提示语 不传入则不显示</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>readOnly</td>
            <td> 只读状态 </td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>lefeIconName</td>
            <td>左侧icon图标名 不传如则不显示 </td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>lefeIconSize</td>
            <td>左侧icon图标大小 </td>
            <td>number</td>
            <td>14</td>
          </tr>
          <tr>
            <td>leftIconColor</td>
            <td>左侧icon图标颜色 </td>
            <td>string</td>
            <td>gray</td>
          </tr>
          <tr>
            <td>rightIconName</td>
            <td>右侧icon图标名 不传如则不显示 </td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>rightIconSize</td>
            <td>右侧icon图标大小 </td>
            <td>number</td>
            <td>14</td>
          </tr>
          <tr>
            <td>rightIconColor</td>
            <td>右侧icon图标颜色 </td>
            <td>string</td>
            <td>gray</td>
          </tr>
          <tr>
            <td>rightIconOnClick</td>
            <td>右侧icon图标点击事件 </td>
            <td>function</td>
            <td>/</td>
          </tr>
          <tr>
            <td>rightIconTitle</td>
            <td>右侧icon图标title(鼠标浮入显示title文字) </td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>inputBorderColor</td>
            <td>设置文本框边框颜色 </td>
            <td>string</td>
            <td>#a0a0a0</td>
          </tr>
          <tr>
            <td>inputBackgroundColor</td>
            <td>设置文本框边框背景色 </td>
            <td>string</td>
            <td>#fff</td>
          </tr>
        </tbody>
      </Table>
      <Space />
    </div>
  );
}
