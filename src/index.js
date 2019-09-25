import React from 'react';
import {render} from "react-dom";
import {H1} from "./lib/H";
import Text from "./lib/Text";
import Button from "./lib/Button";
import './iconfont/iconfont.css';

const App = () => (
    <div style={{width: 640, margin: "15px auto"}}>
        <H1 bold>Demo For Components inside this library</H1>
        <Text size={16}>Demo For Components inside this library</Text>
        <Button type={1}>按钮</Button>
        <Button type={2}>按钮</Button>
        <Button type={3}>按钮</Button>
        <Button type={4} hasIcon IconName={"iconfenxiang"}>按钮</Button>
    </div>
);

render(<App/>, document.getElementById("root"));
