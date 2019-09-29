import React from 'react';

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { H1, H2, H3, H4, H5, H6 } from "../src/lib/H";
import Llabel from '../src/lib/LLable';
import LSearch from '../src/lib/LSearch';
import LError from '../src/lib/LError';
import LEditableLabel from '../src/lib/LEditableLabel';
import LCheckBox from '../src/lib/LCheckbox';
import LA from '../src/lib/LA';
import LTab from '../src/lib/LTab';
import Modal from '../src/lib/Modal';

import GlobelStyle from '../src/globalStyle';
import ButtonDemo from '../src/containers/buttonDemo/ButtonDemo';
import InputDemo from '../src/containers/inputDemo/InputDemo';
import TextAreaDemo from '../src/containers/textAreaDemo/textAreaDemo';
import CascadeSelectDemo from '../src/containers/cascadeSelectDemo/CascadeSelectDemo';
import DatePickerDemo from '../src/containers/datePickerDemo/datePickerDemo';
import SkillSliderDemo from '../src/containers/SkillSliderDemo/SkillSliderDemo';
import Image from '../src/containers/ImageDemo/ImageDemo';
import Loading from '../src/containers/loadingDemo/LoadingDemo';
import EmptyDemo from '../src/containers/emptyDemo/EmptyDemo'
import BackTopDemo from '../src/containers/backTopDemo/BackTopDemo'


// storiesOf('button样式', module).add('button样式1', () =>
//     <Button type={1} onClick={() => alert('1')}>按钮</Button>
// ).add('button样式2', () =>
//     <Button type={2} width={200}>按钮</Button>
// ).add('button样式3', () =>
//     <Button type={3}>按钮</Button>
// ).add('button样式4', () =>
//     <Button type={4}>按钮</Button>
// ).add('button样式1 有icon', () =>
//     <Button type={1} hasIcon IconName={'iconfenxiang'}>有icon按钮</Button>
// );

storiesOf('H', module).add('H1', () =>
    <H1 style={{ color: '#f00' }}>H1</H1>
).add('H2', () =>
    <H2>H2</H2>
).add('H3', () =>
    <H3>H3</H3>
).add('H4', () =>
    <H4>H4</H4>
);

storiesOf('搜索框', module).add('大搜索框', () =>
    <LSearch placeholder={'search'} btnText={'btn'} onClick={() => alert('123')} onChange={(e) => alert(e)} />
).add('小搜索框', () =>
    <LSearch big={false} placeholder={'search'} btnText={'btn'} onClick={() => alert('123')} onChange={(e) => alert(e)} />
);

storiesOf('表单label', module).add('label', () =>
    <Llabel text={'姓名'} htmlFor={'name'} />
);

storiesOf('表单ErrorText', module).add('ErrorText', () =>
    <LError text={'error'} />
);

storiesOf('标签', module).add('不可编辑', () =>
    <LEditableLabel text={'标签标签'} />
).add('可编辑', () =>
    <LEditableLabel text={'标签标签'} removable />
);

storiesOf('复选框', module).add('checkbox', () => {
    return (
        <div>
            <LCheckBox text={'复选框'} checked={true} onChange={() => { }} />
            <LCheckBox text={'复选框'} checked={false} onChange={() => { }} />
        </div>
    )
}).add('radio', () => {
    return (
        <div>
            <LCheckBox type={'radio'} text={'单选框'} checked={true} onChange={() => { }} />
            <LCheckBox type={'radio'} text={'单选框'} checked={false} onChange={() => { }} />
        </div>
    )
});


storiesOf('文字点击域', module).add('a', () => {
    return (
        <LA>文字点击域</LA>
    )
});

storiesOf('Tab', module).add('a', () => {
    return (
        <LTab data={[{ name: '1' }, { name: '2' }, { name: '3' }]} selectIndex={2} onClick={() => alert('1')} />
    )
});
let show = true;

storiesOf('Modal', module).add('Modal1一个按钮', () => {
    return (
        <div>
            {/* <Button type={1} titleName="1" hollow onClick={action('btnclick')}>1</Button> */}
            <Modal visible={true} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} okText={'确定'} cancelText={'取消'} />
        </div>
    )
}).add('Modal2按钮1', () => {
    return (
        <Modal visible={true} type={2} btnStyle={1} title={'title'} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} okText={'确定'} cancelText={'取消'} />
    )
}).add('Modal3按钮2', () => {
    return (
        <Modal visible={show} onCancel={() => show = false} type={2} btnStyle={2} contentNode={(<div><p>恭喜你</p><p>完成了</p></div>)} title={'tip'} okText={'确定'} cancelText={'取消'} />
    )
}).add('Modal4最高高度到屏幕80%', () => {
    return (
        <Modal visible={true} type={3} btnStyle={1} title={'tip'} contentNode={<div>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </div>} okText={'确定'} cancelText={'取消'} />
    )
});


storiesOf('DatePicker', module).add('DatePicker', () =>
    <div><DatePickerDemo /><GlobelStyle /></div>
);
storiesOf('Button', module).add('Button', () =>
    <div><ButtonDemo /><GlobelStyle /></div>
);
storiesOf('Input', module).add('Input', () =>
    <div><InputDemo /><GlobelStyle /></div>
);
storiesOf('TextArea', module).add('TextArea', () =>
    <div><TextAreaDemo /><GlobelStyle /></div>
);
storiesOf('CascadeSelect', module).add('CascadeSelect', () =>
    <div><CascadeSelectDemo /><GlobelStyle /></div>
);
storiesOf('Slider', module).add('Slider', () =>
    <div><SkillSliderDemo /><GlobelStyle /></div>
);
storiesOf('Image', module).add('Image', () =>
    <div><Image /><GlobelStyle /></div>
);
storiesOf('Loading', module).add('Loading', () =>
    <div><Loading /><GlobelStyle /></div>
);
storiesOf('Empty', module).add('Empty', () =>
    <div><EmptyDemo /><GlobelStyle /></div>
);
storiesOf('BackTop', module).add('BackTop', () =>
    <div><BackTopDemo/><GlobelStyle /></div>
);


