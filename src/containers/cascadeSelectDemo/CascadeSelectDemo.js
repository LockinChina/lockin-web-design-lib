import React, { useState } from 'react';
import { GrayBox, Ptit, Space, Table } from '../../globalDemoStyle';

import CascadeSelect from '../../lib/CascadeSelect/CascadeSelect';
import { degreeJson } from '../../data/degree';
import { jobCategoryJson } from '../../data/jobCategory';


export default function InputDemo() {
  const [selectValue0, setSelectValue0] = useState('');
  const [selectValue1, setSelectValue1] = useState('');
  const [selectValue2, setSelectValue2] = useState('中国 江苏省 徐州市');
  const [selectValue3, setSelectValue3] = useState('');
  return (
    <div>
      <GrayBox>
        <Ptit>联级下拉菜单: </Ptit>
        <Space />
        <CascadeSelect
          invalid={false} // 是否禁用
          // width={} // 整体宽度
          // insideWidth={} // 下拉菜单弹出宽度
          value={selectValue3}
          titleName="" //标题
          col={1} // 有几列 默认1 
          placeholder="常规无标题"
          onChange={(label, value) => { // 两个参数: 数组类型  第一个参数 label集合  第二个参数 value集合
            setSelectValue3(label.length > 1 ? label.join(' ') : label);
            console.log(`id: ${value}`);
          }}
          wrongText="" //错误提示
          dataApi={degreeJson} // 数据
        />

        <Space />

        <CascadeSelect
          width={300}
          value={selectValue0}
          titleName="1级下拉菜单 自定义宽度"
          placeholder="请选择"
          onChange={(label, value) => {
            setSelectValue0(label.length > 1 ? label.join(' ') : label);
            console.log(`id: ${value}`);
          }}
          dataApi={degreeJson}
        />

        <Space />

        <CascadeSelect
          width={600}
          // insideWidth = {500}
          value={selectValue1}
          col={2}
          titleName="2级下拉菜单 + 错误提示"
          placeholder="请选择"
          onChange={(label, value) => {
            setSelectValue1(label.length > 1 ? label.join(' ') : label);
            console.log(`id: ${value}`);
          }}
          wrongText="请选择！"
          dataApi={jobCategoryJson}
        />

        <Space />
        <CascadeSelect
          // width={200}
          // insideWidth = {500}
          value={selectValue2}
          titleName="3级下拉菜单"
          placeholder="请选择"
          onChange={(label, value) => {
            setSelectValue2(label.length > 1 ? label.join(' ') : label);
            console.log(`id: ${value}`);
          }}
          dataApi={"https://resource.lockinchina.com/json/jsonCitys.js?version=20190726"}
          col={3}
        />

        <Space />
        <CascadeSelect
          value="我现在不可以选择"
          titleName="禁止选择"
          placeholder="请选择"
          invalid={true}
        />
      </GrayBox>
      <Table className="w">
        <thead>
          <tr><td>属性</td><td>说明</td><td>类型</td><td>默认值</td></tr></thead>
        <tbody>
          <tr><td>titleName</td><td>标题 不传入则不显示</td><td>string</td><td>/</td></tr>
          <tr><td>col</td><td>显示几列</td><td>number</td><td>1</td></tr>
          <tr><td>value</td><td>select value</td><td>string</td><td>/</td></tr>
          <tr><td>width</td><td>自定义宽度</td><td>number</td><td>/</td></tr>
          <tr><td>placeholder</td><td>占位提示语</td><td>string</td><td>请选择</td></tr>
          <tr><td>onChange</td><td>select onChange事件 传入两个参数: label, value  例:["中国", "江苏省", "徐州市"] [1] </td><td>function</td><td>/</td></tr>
          <tr><td>wrongText</td><td>错误提示语 不传入则不显示</td><td>string</td><td>/</td></tr>
          <tr><td>dataApi</td><td>要使用得数据源 (string为调用远程API接口地址获取数据, object为本地数据)</td><td>string, object</td><td>/</td></tr>
          <tr><td>invalid</td><td>禁止选择状态</td><td>boolean</td><td>false</td></tr>
        </tbody>
      </Table>
      <Space />
    </div>
  )
}
