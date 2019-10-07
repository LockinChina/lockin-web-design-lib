/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable func-names */
import React, { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import InputContainer from './inputStyle';

const Input = React.forwardRef(function(props, ref) {
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
    name,
    inputBorderColor,
    inputBackgroundColor,
    onBlur,
    onFocus,
    children,
  } = props;

  useEffect(() => {}, []);
  // eslint-disable-next-line consistent-return
  const setBorder = () => {
    if (wrongText || (wrongText && inputBorderColor)) {
      return 'red';
    }
    if (inputBorderColor) {
      return inputBorderColor;
    }
  };

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
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="text "
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={e => {
            const val = e.target.value;
            onChange(val);
          }}
          value={value}
          onBlur={() => {
            onBlur();
            setBlurState(0);
          }}
          onFocus={() => {
            onFocus();
            setBlurState(1);
          }}
        />
        <span
          // role="button"
          // tabIndex="0"
          title={rightIconTitle}
          onClick={() => rightIconOnClick()}
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
  onBlur: () => {},
  onFocus: () => {},
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.node,
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
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  wrongText: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  readOnly: PropTypes.bool,
  name: PropTypes.node,
  inputBorderColor: PropTypes.string,
  titleName: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
  children: PropTypes.node,
};

export default Input;
