import React, { useState, useEffect } from 'react';
import InputContainer from './inputStyle';

const Input = React.forwardRef(function(props, ref)  {
  const [blurState, setBlurState] = useState(0);
  const { 
    value,
    placeholder, 
    titleName,
    onChange, 
    leftIconName, 
    leftIconColor, 
    leftIconSize,
    rightIconName, 
    rightIconColor, 
    rightIconSize,
    rightIconTitle,
    rightIconOnClick,
    defaultValue,
    wrongText,
    type,
    maxLength,
    width,
    readOnly,
    name
  } = props;

  return (
    <InputContainer style={{width: `${width}px`}}>
      <p className="title" style={{display: titleName ? 'block' : 'none'}} >{titleName}</p>
      <div className={"inputBody fadeAnim "+(blurState ? "active " : "") + (wrongText ? "textWrong " : "") + (readOnly ? "readOnlyOpacity " : "")}>
        <span className={"iconfont " + (leftIconName ? leftIconName: "")} style={{color: `${leftIconColor}`, fontSize: `${leftIconSize}px `}} ></span>
        <input 
          ref={ref}
          name={name}
          disabled = {readOnly ? "disabled" : ""}
          type={type}
          defaultValue = {defaultValue}
          placeholder={placeholder} 
          className={"text "}
          maxLength={maxLength}
          readOnly = {readOnly}
          onChange = {(e)=> {
            let val = e.target.value;
            onChange(val)
          }} 
          value={value}
          onBlur={()=> setBlurState(0) } 
          onFocus = {()=> setBlurState(1)}
        />
        <span title={rightIconTitle} onClick={()=> rightIconOnClick()} className={"iconfont " + (rightIconName ? rightIconName: "")} style={{color: `${rightIconColor}`, fontSize: `${rightIconSize}px`}} ></span>
      </div>
      <p className="wrongText" style={{display: wrongText ? "block" : "none"}}>{wrongText}</p>
    </InputContainer>
  )
});

Input.defaultProps = {
  type: "text",
  placeholder: '请输入',
  onChange: () => {},
  rightIconOnClick: ()=>{}
}

export default Input;