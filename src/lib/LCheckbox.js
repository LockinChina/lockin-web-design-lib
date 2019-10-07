import React from 'react';
import PropTypes from 'prop-types';
const LCheckBox = ({ type = 'checkbox', checked, text, onChange }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <input
      type={type}
      id="checkLab"
      checked={checked}
      onChange={() => onChange()}
    />
    <label htmlFor="checkLab" style={{ marginLeft: 10, cursor: 'pointer' }}>
      {text}
    </label>
  </div>
);

LCheckBox.propTypes = {
  type: PropTypes.string,
  checked: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
};

export default LCheckBox;
