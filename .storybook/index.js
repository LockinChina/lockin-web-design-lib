import React from 'react';
import { storiesOf } from "@storybook/react";
import Button from '../src/lib/Button';
import { H1, H2, H3, H4, H5, H6 } from "../src/lib/H";

storiesOf('button样式', module).add('button样式1', () =>
    <Button type={1}>按钮</Button>
).add('button样式2', () =>
    <Button type={2}>按钮</Button>
).add('button样式3', () =>
    <Button type={3}>按钮</Button>
).add('button样式4', () =>
    <Button type={4}>按钮</Button>
).add('button样式1 有icon', () =>
    <Button type={1} hasIcon IconName={"\\e633"}>有icon按钮</Button>
);

storiesOf('H', module).add('H1', () =>
    <H1>H1</H1>
).add('H2', () =>
    <H2>H2</H2>
).add('H3', () =>
    <H3>H3</H3>
).add('H4', () =>
    <H4>H4</H4>
);
