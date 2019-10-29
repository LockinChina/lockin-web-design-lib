/* eslint-disable no-constant-condition */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import DatePicker from '../../lib/DatePicker/DatePicker';
import { GrayBox, Ptit, Space, Table } from '../../globalDemoStyle';

const Rowbox = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function DatePickerDemo() {
  // const [dateV1, setDateV1] = useState('2019-11');
  // const [dateV2, setDateV2] = useState('');
  // const [dateV3, setDateV3] = useState('');
  // const [dateV4, setDateV4] = useState('');
  // const [dateV5, setDateV5] = useState('');
  // const [dateV6, setDateV6] = useState('');
  return (
    <div>
      <GrayBox>
        <Ptit>日期控件：</Ptit>

        <Space />

        <Rowbox>
          <DatePicker
            titleName="选择年月"
            width={280}
            defaultValue="2019-10"
            // onChange={e => {
            //   setDateV1(e.join('-'));
            // }}
          />
          <div style={{ width: '20px' }} />
          <DatePicker
            titleName="选择年月日"
            hasDay
            placeholder="请选择"
            width={280}
          />
          <div style={{ width: '20px' }} />
          <DatePicker
            titleName="至今"
            type={!true ? '至今' : 'now'}
            placeholder="请选择"
            width={280}
            wrongText="请选择"
          />
        </Rowbox>
        <Space />
        <Rowbox>
          <DatePicker
            titleName="无经验"
            placeholder="请选择"
            width={280}
            type="无经验"
          />
          <div style={{ width: '20px' }} />
          <DatePicker
            titleName="+5年"
            placeholder="请选择"
            width={280}
            type="gTime"
          />
          <div style={{ width: '20px' }} />
          <DatePicker
            titleName="失效"
            placeholder="请选择"
            width={280}
            invalid
          />
        </Rowbox>
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
            <td>
              特殊参数 gTime:毕业时间+5年; 至今、无经验则只需传入指定的文字即可
              例: type={`{isCn ? '至今' : 'Now'}`}
              <br /> 外部组件设值: (e) => e.join('/ or -')自定义分割
            </td>
            <td>string</td>
            <td />
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
            <td>请选择</td>
          </tr>
          <tr>
            <td>onChange</td>
            <td>
              文本框onChange函数 带一个数组类型参数 例: ['2019', '01',
              '02']、['至今']{' '}
            </td>
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
            <td>invalid</td>
            <td>失效状态</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>hasDay</td>
            <td>显示'日'选项</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </Table>
      <Space />
    </div>
  );
}
