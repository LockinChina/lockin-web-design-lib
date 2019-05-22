import React from 'react';
import { render } from "react-dom";
import { TextInput } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Demo For Components inside this library</h1>
    <TextInput label="Email Address" placeholder="name@example.com" big={true}/>
  </div>
);

render(<App />, document.getElementById("root"));
