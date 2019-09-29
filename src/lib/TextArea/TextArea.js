
import React, { useState } from 'react';

import TextAreaContainer from './textAreaStyle';
import PropTypes from 'prop-types';

const TextArea = React.forwardRef(function (props, ref) {
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
    rows,
    maxLength,
    width,
    name,
    readOnly
  } = props;

  return (
    <TextAreaContainer style={{ width: `${width}px` }}>
      <p className="title" style={{ display: titleName ? 'block' : 'none' }} >{titleName}</p>
      <div className={"inputBody fadeAnim " + (blurState ? "active " : "") + (wrongText ? "textWrong " : "") + (readOnly ? "readOnlyOpacity " : "")}>
        <span className={"iconfont " + (leftIconName ? leftIconName : "")} style={{ color: `${leftIconColor}`, fontSize: `${leftIconSize}px ` }} ></span>
        <textarea
          name={name}
          ref={ref}
          disabled={readOnly ? "disabled" : ""}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={"text "}
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={(e) => {
            let val = e.target.value;
            onChange(val)
          }}
          value={value}
          rows={rows}
          onBlur={() => setBlurState(0)}
          onFocus={() => setBlurState(1)}
        >
        </textarea>
        <span title={rightIconTitle} onClick={() => rightIconOnClick()} className={"iconfont " + (rightIconName ? rightIconName : "")} style={{ color: `${rightIconColor}`, fontSize: `${rightIconSize}px` }} ></span>
      </div>
      <p className="wrongText" style={{ display: wrongText ? "block" : "none" }}>{wrongText}</p>
    </TextAreaContainer>
  )
})

TextArea.defaultProps = {
  type: "text",
  placeholder: '请输入',
  rows: 4,
  onChange: () => { },
  rightIconOnClick: () => { }
}

TextArea.propTypes = {
  name: PropTypes.node,
  ref: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  rows: PropTypes.number,
  wrongText: PropTypes.string
}

export default TextArea;
