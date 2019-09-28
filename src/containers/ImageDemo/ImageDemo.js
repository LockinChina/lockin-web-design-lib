import React from 'react';

import Image from '../../lib/Image/Image';
import { GrayBox, Ptit, Space, BtnSpace, Table } from '../../globalDemoStyle';

import styled from 'styled-components';
const Rowbox =styled.div`
  >div{
    margin-right:20px;
    >p{ margin-bottom: 10px;}
  }
  display: flex;
  flex-direction: row;
`


export default function DatePickerDemo () {
  return (
    <div>
      <GrayBox>
        <Ptit>头像 / 图片：</Ptit>
        <Space />
        <Rowbox>
          <div>
            <p>默认</p>
            <Image />
          </div>
          <div>
            <p>上传头像</p>
            <Image width={80} radius={5} height={80} upload fileOnChange={e => alert(e)} />
          </div>
          <div>
            <p>圆角</p>
            <Image backgroundIm="0" backgroundColor="#f1f1f1" width={50} imUrl="http://www.lockinchina.com/static/images/newIndex/logo.jpg" height={50} radius={50} />
          </div>
          <div>
            <p>自定义1</p>
            <Image 
                width={160} 
                height={120} 
                // radius={50} 
                // upload
                imUrl = "https://image.lockinchina.com/next/2019-09-16/c19f9bd2-4319-42fd-8a28-88d2fe6ea887.jpg"
                backgroundIm = "0" 
                link="http://www.lockinchina.com/network/1260.html"
                blank={true}
            />
          </div>
          <div>
            <p>自定义2</p>
            <Image 
                width={160} 
                height={200} 
                borderColor="green"
                // radius={50} 
                // upload
                imUrl = "https://image.lockinchina.com/next/2019-09-16/c19f9bd2-4319-42fd-8a28-88d2fe6ea887.jpg"
                backgroundIm = "0" 
                link="http://www.lockinchina.com/network/1260.html"
                blank={true}
            />
          </div>
          <div>
            <p>自义3</p>
            <Image 
                width={100} 
                height={100} 
                borderColor="red"
                // radius={50} 
                // upload
                imUrl = "https://image-company.lockinchina.com/pro/15304/Companylogopic.jpg"
                backgroundIm = "0" 
                link="http://www.lockinchina.com/network/1260.html"
                blank={true}
            />
          </div>
          
        </Rowbox>
      </GrayBox>
      <Table className="w">
        <thead>
          <tr>
            <td>属性</td><td>说明</td><td>类型</td><td>默认值</td>
          </tr>
        </thead>
        <tbody>
          <tr><td>width</td><td>设置宽度</td><td>number</td><td>120</td></tr>
          <tr><td>height</td><td>设置高度</td><td>number</td><td>120</td></tr>
          <tr><td>imAlt</td><td>设置图片alt属性</td><td>string</td><td>/</td></tr>
          <tr><td>radius</td><td>以px为单位设置圆角半径</td><td>number</td><td>0</td></tr>
          <tr><td>upload</td><td>设置为上传状态</td><td>boolean</td><td>false</td></tr>
          <tr><td>backgroundIm</td><td>设置背景图 特殊参数:0 设置背景图为空;  除0以外传入背景图路径  </td><td>string</td><td>蓝色小人头像</td></tr>
          <tr><td>imUrl</td><td>图片地址 </td><td>string</td><td>/</td></tr>
          <tr><td>blank</td><td>跳转方式 false: 当前页打开 true: 新页面打开 </td><td>boolean</td><td>false</td></tr>
          <tr><td>link</td><td>链接地址</td><td>string</td><td>/</td></tr>
          <tr><td>fileOnChange</td><td>上传头像事件 1个参数:文件路径</td><td>function</td><td>/</td></tr>
          <tr><td>borderColor</td><td>设置边框 只有设置了borderColor才会显示边框 传入16进制色值或英文字符 例:borderColor="white" borderColor="#fefe43" </td><td>string</td><td>/</td></tr>
          <tr><td>backgroundColor</td><td>设置背景色 传入16进制色值或英文字符 例:backgroundColor="white" backgroundColor="#fefe43" </td><td>string</td><td>white</td></tr>
          
        </tbody>
      </Table>
      <Space />
    </div>
  )
}



