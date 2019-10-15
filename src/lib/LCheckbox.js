import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxDiv = styled.div`
  input[type='checkbox'] {
    width: 15px;
    height: 15px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 15px;
    position: relative;
  }
  input[type='checkbox']::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 153, 1);
  }
  input[type='checkbox']:checked::before {
    content: '\\2713';
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid rgba(0, 0, 153, 1);
    color: rgba(0, 0, 153, 1);
    font-size: 16px;
    font-weight: bold;
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
    background-color: rgba(0, 0, 153, 1);
    border-radius: 50%;
  }
`;
const LCheckBox = ({ type = 'checkbox', checked, text, onChange }) => (
  <CheckboxDiv
    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
  >
    <input
      type={type}
      id="checkLab"
      checked={checked}
      onChange={() => onChange()}
    />
    <label htmlFor="checkLab" style={{ marginLeft: 10, cursor: 'pointer' }}>
      {text}
    </label>
  </CheckboxDiv>
);

LCheckBox.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default LCheckBox;
