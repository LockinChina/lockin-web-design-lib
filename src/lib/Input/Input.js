/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import InputContainer from './inputStyle';

const Input = React.forwardRef((props, ref) => {
  const [blurState, setBlurState] = useState(0);
  const {
    // value,
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
    name,
    inputBorderColor,
    rightIconMouseDownCapture,
    rightIconMouseUpCapture,
    inputBackgroundColor,
    children,
    onBlur,
    onFocus,
  } = props;

  const setBorder = () => {
    if (wrongText || (wrongText && inputBorderColor)) {
      return 'red';
    }
    if (inputBorderColor) {
      return inputBorderColor;
    }
    return '';
  };
  const [vall, setVal] = useState('');
  useEffect(() => {
    setVal(defaultValue);
  }, [defaultValue]);
  return (
    <InputContainer style={{ width: `${width}px` }}>
      <p className="title" style={{ display: titleName ? 'block' : 'none' }}>
        {titleName}
      </p>
      <div
        className={`inputBody fadeAnim ${blurState ? 'active ' : ''}${
          readOnly ? 'readOnlyOpacity ' : ''
        }`}
        style={{
          borderColor: setBorder(),
          background: inputBackgroundColor || '#fff',
        }}
      >
        <span
          className={`iconfont ${leftIconName || ''}`}
          style={{ color: `${leftIconColor}`, fontSize: `${leftIconSize}px ` }}
        />
        <input
          ref={ref}
          name={name}
          disabled={readOnly ? 'disabled' : ''}
          type={type}
          defaultValue={vall}
          placeholder={placeholder}
          className="text "
          maxLength={maxLength}
          readOnly={readOnly}
          autoComplete="off"
          onChange={e => {
            const val = e.target.value;
            onChange(val);
          }}
          // value={value}
          onBlur={e => {
            setBlurState(0);
            onBlur(e.target.value);
          }}
          onFocus={e => {
            setBlurState(1);
            onFocus(e.target.value);
          }}
        />
        <span
          title={rightIconTitle}
          onClick={() => rightIconOnClick()}
          onMouseDownCapture={() => rightIconMouseDownCapture()}
          onMouseUpCapture={() => rightIconMouseUpCapture()}
          className={`iconfont ${rightIconName || ''}`}
          style={{ color: `${rightIconColor}`, fontSize: `${rightIconSize}px` }}
        />
        {Children.toArray(children)}
      </div>

      <p
        className="wrongText"
        style={{ display: wrongText ? 'block' : 'none' }}
      >
        {wrongText}
      </p>
    </InputContainer>
  );
});

Input.defaultProps = {
  type: 'text',
  placeholder: '请输入',
  onChange: () => {},
  rightIconOnClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  rightIconMouseUpCapture: () => {},
  rightIconMouseDownCapture: () => {},
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  // value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  leftIconName: PropTypes.string,
  leftIconColor: PropTypes.string,
  leftIconSize: PropTypes.number,
  rightIconName: PropTypes.string,
  rightIconColor: PropTypes.string,
  rightIconSize: PropTypes.number,
  rightIconTitle: PropTypes.string,
  rightIconOnClick: PropTypes.func,
  rightIconMouseDownCapture: PropTypes.func,
  rightIconMouseUpCapture: PropTypes.func,
  wrongText: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  readOnly: PropTypes.bool,
  name: PropTypes.node,
  inputBorderColor: PropTypes.string,
  titleName: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
