import React from "react";
import styled , {css} from 'styled-components';
import './common.css';
const LCheckBox = ({ type = 'checkbox', checked, text, onChange }) => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input type={type} id='checkLab' checked={checked} onChange={onChange}/>
        <label htmlFor="checkLab" style={{ marginLeft: 10 }}>{text}</label>
    </div>
);

export default LCheckBox;
