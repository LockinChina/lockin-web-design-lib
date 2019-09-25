import React from 'react';
import { render } from "react-dom";
import { TextInput, SuperForm } from "./lib";


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Demo For Components inside this library</h1>
    <SuperForm>
      <TextInput name="username" label={"User Name"} placeholder="that 1text holder" size={50}  />
      <TextInput name="password" size={50} placeholder="myplaceholder" label={"this is test text"} />
    </SuperForm>

  </div>
);

render(<App />, document.getElementById("root"));
