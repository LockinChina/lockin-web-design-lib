import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";
import { H1, H3 } from "./lib/H";
import Text from "./lib/Text";
import Button from "./lib/Button";
import TextInput1 from "./lib/TextInput1";
import './iconfont/iconfont.css';

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <H1 bold>Demo For Components inside this library</H1>
    <Text size={16}>Demo For Components inside this library</Text>
    <Button type={1} hasIcon IconName={"\\e633"}>按钮</Button>
    <Button type={2}>按钮</Button>
    <Button type={3}>按钮</Button>
    <Button type={4} hasIcon IconName={"\\e603"}>按钮</Button>
    <TextInput label="Email Address" placeholder="name@example.com" big={true} />
    <TextInput1 label="Email Address" placeholder="name@example.com" big={true} wrongText={''} />
    <TextInput1 label="Email Address" placeholder="name@example.com" big={true} wrongText={'WrongTextWrong'} />
  </div>
);

render(<App />, document.getElementById("root"));
