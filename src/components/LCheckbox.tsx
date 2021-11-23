import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxDiv = styled.div`
  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%; 
    height: 100%;
    background: url('${require('../static/images/icons_checkbox.png')}');
  }
  input[type='checkbox']:checked::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('${require('../static/images/icons_checkbox.png')}');
    background-position: 0 -20px;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
    vertical-align: center;
    background: #fff;
    border: 1px solid rgba(0, 0, 153, 1);
    position: relative;
    border-radius: 50%;
  }
  input[type='radio']:checked::before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 0;
    bottom: 0;
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 153, 1) !important;
    border-radius: 50%;
  }
`;
const LCheckBox = React.forwardRef((props, ref) => {
  const {type, checked, text, name, onChange, inputId} = props;
  const [isChecked, setChecked] = useState(checked);
  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <CheckboxDiv
      style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
    >
      <input
        type={type}
        id={inputId}
        checked={isChecked}
        onChange={() => {
          onChange();
          setChecked(!isChecked);
        }}
        ref={ref}
        name={name}
      />
      <label
        htmlFor={inputId}
        style={{marginLeft: text ? 10 : '', cursor: 'pointer'}}
      >
        {text}
      </label>
    </CheckboxDiv>
  );
});
LCheckBox.defaultProps = {
  onChange: () => { },
  type: 'checkbox',
};

LCheckBox.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.node,
  inputId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


LCheckBox.displayName = 'LCheckBox';
export default LCheckBox;
