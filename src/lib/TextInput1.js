import React from "react";
import styled, { css } from 'styled-components';


const StyleInput = styled.input`
  display: inline-block;
  width:276px;
  height: 36px;
  background:rgba(255,255,255,1);
  border-radius:2px;
  border: ${props => (props.wrongText ? '1px solid rgba(255,82,82,1)': '1px solid rgba(160,160,160,1)')};
  padding-left: 10px;
  &:focus{
    outline-color: #005ED4;
    box-shadow:0px 2px 4px 0px rgba(0,94,212,0.2);
  };
`;

const InputLabel = styled.label`
  font-size: 14px;
  color: rgba(51,51,51,1);
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
`;
const WrongText = styled.div`
  font-size: 12px;
  font-weight:400;
  color:rgba(255,82,82,1);
  line-height:17px;
  margin-top: 5px;
`;

const InputDiv = styled.div`
`;

const TextInput = ({ type = "text", label, value, big,onChange,placeholder, isSearchInput }) => (
  <InputDiv>
    {label && <InputLabel>{label}</InputLabel>}
    <StyleInput
      type={type}
      value={value}
      placeholder = {placeholder}
      big = {true}
      size ={100}
      isSearchInput ={isSearchInput}
      onChange={e => onChange && onChange(e.target.value)}
    />
  </InputDiv>
);

export default TextInput;
