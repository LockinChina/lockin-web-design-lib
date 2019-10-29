/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import TextAreaContainer from './textAreaStyle';

const TextArea = React.forwardRef(function(props, ref) {
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
    rows,
    maxLength,
    width,
    name,
    readOnly,
  } = props;
  const [sValue, setValue] = useState('');
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <TextAreaContainer style={{ width: `${width}px` }}>
      <p className="title" style={{ display: titleName ? 'block' : 'none' }}>
        {titleName}
      </p>
      <div
        className={`inputBody fadeAnim ${blurState ? 'active ' : ''}${
          wrongText ? 'textWrong ' : ''
        }${readOnly ? 'readOnlyOpacity ' : ''}`}
      >
        <span
          className={`iconfont ${leftIconName || ''}`}
          style={{ color: `${leftIconColor}`, fontSize: `${leftIconSize}px ` }}
        />
        <input type="hidden" name={name} ref={ref} value={sValue} />
        <textarea
          // name={name}
          // ref={ref}
          disabled={readOnly ? 'disabled' : ''}
          // defaultValue={defaultValue}
          placeholder={placeholder}
          className="text "
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={e => {
            const val = e.target.value;
            onChange(val);
            setValue(val);
          }}
          value={sValue}
          rows={rows}
          onBlur={() => setBlurState(0)}
          onFocus={() => setBlurState(1)}
        />
        <span
          title={rightIconTitle}
          onClick={() => rightIconOnClick()}
          className={`iconfont ${rightIconName || ''}`}
          style={{ color: `${rightIconColor}`, fontSize: `${rightIconSize}px` }}
        />
      </div>
      <p
        className="wrongText"
        style={{ display: wrongText ? 'block' : 'none' }}
      >
        {wrongText}
      </p>
    </TextAreaContainer>
  );
});

TextArea.defaultProps = {
  type: 'text',
  placeholder: '请输入',
  rows: 4,
  onChange: () => {},
  rightIconOnClick: () => {},
};

TextArea.propTypes = {
  name: PropTypes.node,
  ref: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  // value: PropTypes.string,
  rows: PropTypes.number,
  wrongText: PropTypes.string,
};

export default TextArea;
