import React from 'react';
import GlobalStyle from './globalStyle';
import './iconfont/iconfont.css'

import ButtonDemo from './containers/buttonDemo/ButtonDemo';
import InputnDemo from './containers/inputDemo/InputDemo';
import TextAreaDemo from './containers/textAreaDemo/textAreaDemo';
import CascadeSelectDemo from './containers/cascadeSelectDemo/CascadeSelectDemo';

function App() {
  return (
    <div>
      <ButtonDemo />
      <InputnDemo />
      <TextAreaDemo />
      <GlobalStyle />
      <CascadeSelectDemo />
      <div style={{height: '200px'}}></div>
    </div>
  );
}

export default App;