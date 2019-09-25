import React, { useState } from 'react';
import {GrayBox, Ptit, Space, BtnSpace, Table} from '../../globalDemoStyle';

import TextArea from '../../components/TextArea/TextArea';

export default function InputDemo () {
  return (
    <div>
      <GrayBox>
        <Ptit>文本域: </Ptit>
        <Space/>
        <TextArea 
          defaultValue="" //初始值
          width="" // 设置长度 
          maxLength={10} //最大长度
          titleName="" //标题
          placeholder="常规无标题" 
          onChange={(e)=> console.log(e)} //文本框onChange事件
          // value = ""  // 文本框value
          wrongText="" // 错误提示
          readOnly={false} //只读
          lefeIconName="" //左侧图标名称
          lefeIconSize="" //左侧图标大小
          leftIconColor="" //左侧图标颜色
          rightIconName="" //右侧图标名称
          rightIconSize="" //右侧图标大小
          rightIconColor="" //右侧图标颜色
          rightIconOnClick = {()=>{}} //右侧图标点击事件
          rightIconTitle = "" // 右侧图标title (鼠标移入悬浮提示)
          rows="4" //设置行数
        />
        <Space/>
        <TextArea 
          defaultValue="" 
          width="300"
          maxLength={20} 
          titleName="自定义宽度 限制2行"
          onChange={(e)=> console.log(e)}
          rows={2}
        />
        <Space/>
        <TextArea 
          defaultValue="" 
          maxLength={20} 
          titleName="错误提示"
          onChange={(e)=> console.log(e)}
          wrongText="我是错误提示！" 
        />
        <Space/>
        <TextArea 
          titleName="只读"
          defaultValue="现在只能读不能写"
          readOnly={true}
        />
      </GrayBox>
      <Table className="w">
        <thead>
          <tr>
            <td>属性</td> <td>说明</td> <td>类型</td> <td>默认值</td>
          </tr>
        </thead>
        <tbody>
            <tr><td>titleName</td> <td>标题 不传入则不显示</td> <td>string</td> <td>/</td></tr>
            <tr><td>width</td> <td>设置文本域宽度</td> <td>number</td> <td>/</td></tr>
            <tr><td>maxLength</td><td>设置文本最大长度</td> <td>number</td> <td>/</td></tr>
            <tr><td>defaultValue</td><td>初始值</td> <td>string</td> <td>/</td></tr>
            <tr><td>placeholder</td><td>占位提示语</td> <td>string</td> <td>请输入</td></tr>
            <tr><td>rows</td><td>设置显示几行</td> <td>number</td> <td>4</td></tr>
            <tr><td>onChange</td><td>文本域onChange函数 带一个参数: 本文输入当前值</td> <td>function</td> <td>/</td></tr>
            <tr><td>value</td><td>文本域value</td> <td>string</td> <td>/</td></tr>
            <tr><td>wrongText</td><td>错误提示语 不传入则不显示</td> <td>string</td> <td>/</td></tr>
            <tr><td>readOnly</td><td> 只读状态 </td> <td>boolean</td> <td>false</td></tr>
            <tr><td>lefeIconName</td><td>左侧icon图标名 不传如则不显示 </td> <td>string</td> <td>/</td></tr>
            <tr><td>lefeIconSize</td><td>左侧icon图标大小 </td> <td>number</td> <td>14</td></tr>
            <tr><td>leftIconColor</td><td>左侧icon图标颜色 </td> <td>string</td> <td>gray</td></tr>
            <tr><td>rightIconName</td><td>右侧icon图标名 不传如则不显示 </td> <td>string</td> <td>/</td></tr>
            <tr><td>rightIconSize</td><td>右侧icon图标大小 </td> <td>number</td> <td>14</td></tr>
            <tr><td>rightIconColor</td><td>右侧icon图标颜色 </td> <td>string</td> <td>gray</td></tr>
            <tr><td>rightIconOnClick</td><td>右侧icon图标点击事件 </td> <td>function</td> <td>/</td></tr>
            <tr><td>rightIconTitle</td><td>右侧icon图标title(鼠标浮入显示title文字) </td> <td>string</td> <td>/</td></tr>
          </tbody>
      </Table>
      <Space/>
    </div>
  )
}