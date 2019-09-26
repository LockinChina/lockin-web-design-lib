import React from "react";
import styled , {css} from 'styled-components';
import './common.css';
import PropTypes from "prop-types";
import LEditableLabel from "./LEditableLabel";
const LCheckBox = ({ type = 'checkbox', checked, text, onChange }) => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input type={type} id='checkLab' checked={checked} onChange={() => onChange()}/>
        <label htmlFor={"checkLab"} style={{ marginLeft: 10, cursor: 'pointer' }}>{text}</label>
    </div>
);

LCheckBox.propTypes = {
    type: PropTypes.string,
    checked: PropTypes.bool,
    text: PropTypes.string,
    onChange: PropTypes.func,
};

export default LCheckBox;
