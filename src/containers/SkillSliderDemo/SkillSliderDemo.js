import React, { useState } from 'react';
import { GrayBox, Ptit, Space, Table } from '../../globalDemoStyle';
import Slider from '../../lib/Slider/Slider';
export default function SkillSlider() {
  const [n, setN] = useState(0);
  return (
    <div>
      <GrayBox style={{ background: 'white' }}>
        <Ptit>Slider: </Ptit>
        <Space />
        <Slider
          titleName="掌握技能"
          value={n}
          onChange={(val) => setN(val)}
        />
        <Slider disabled value={n} />
      </GrayBox>
      <Table className="w">
        <thead>
          <tr>
            <td>属性</td><td>说明</td><td>类型</td><td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr><td>titleName</td><td>标题 不传入则不显示</td><td>string</td><td>/</td></tr>
          <tr><td>initValue</td><td>初始值</td><td>number</td><td>0</td></tr>
          <tr><td>value</td><td>设值</td><td>number</td><td>/</td></tr>
          <tr><td>onChange</td><td>事件 参数： 0-100的选取值</td><td>function</td><td>/</td></tr>
          <tr><td>disabled</td><td>失效状态 用于回显</td><td>boolean</td><td>false</td></tr>
          <tr><td>width</td><td>slider宽度</td><td>number</td><td>500</td></tr>
        </tbody>
      </Table>
      <Space />
    </div>
  )
}
