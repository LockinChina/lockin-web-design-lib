import React from "react";
import styled from 'styled-components';


const StyleInput = styled.input`
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: ${props => (props.big ? '16px' : '10px')};
  font-weight: 400;
  color: rgb(33, 37, 41);
`


const TextInput = ({ type = "text", label, value, big,onChange,placeholder }) => (
  <div >
    {label && <label >{label}</label>}
    <StyleInput
      type={type}
      value={value}
      placeholder = {placeholder}
      big = {true}
      size ={100}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
