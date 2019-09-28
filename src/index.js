import React from 'react';
export * from "./lib";
import {render} from "react-dom";
import {H1} from "./lib/H";
import Text from "./lib/Text";
import Button from "./lib/Button";
import './iconfont/iconfont.css';
import Image from './lib/Image/Image';
import Loading from './lib/Loading/Loading';

const App = (props) => (
    <div style={{width: 640, margin: "15px auto"}}>
        <H1 bold>Demo For Components inside this library</H1>
        <Text size={16}>Demo For Components inside this library</Text>
        <Button type={1}>按钮</Button>
        <Button type={2}>按钮</Button>
        <Button type={3}>按钮</Button>
        <Button type={4} hasIcon IconName={"iconfenxiang"}>按钮</Button>
        <div style={{clear: 'both', height: '50px'}}></div>
        <Image width={100} height={100} upload />
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
        <Loading  message="" transparent={true} opacity={1} />
    </div>
);

render(<App/>, document.getElementById("root"));

