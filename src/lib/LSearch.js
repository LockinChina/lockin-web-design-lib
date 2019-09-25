import React from "react";
import styled, { css } from 'styled-components';
import Button from './Button';


const StyleInput = styled.input`
  display: inline-block;
  width:276px;
  font-size: ${props => (props.big ? '16px' : '14px')};
  height: ${props => (props.big ? '35px' : '25px')};
  background:rgba(255,255,255,1);
  border-top-left-radius:2px;
  border-bottom-left-radius:2px;
  border: 1px solid rgba(160,160,160,1);
  border-right: none;
  padding-left: ${props => (props.big ? '20px' : '10px')};
  &:focus{
    outline: none;
  };
`;

const ButtonStyle = styled.button`
        font-size: ${props => (props.big ? '16px' : '14px')};
        padding: 0 20px;
        height: ${props => (props.big ? '40px' : '30px')};
        line-height: ${props => (props.big ? '40px' : '30px')};
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
        cursor: pointer;
        position: relative;
        color: #fff;
        &:focus{ outline: none; };
        background-color: #000099;
        &:hover {
          background-color:rgba(0,78,201,1);
        };
        &:active {
          background-color: rgba(0,0,153,1);
        };

`

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LSearch = ({ type = "text", value, big = true, onChange, placeholder, btnText, onClick }) => (
    <InputDiv>
        <StyleInput
            type={type}
            value={value}
            placeholder = {placeholder}
            big={big}
            onChange={e => onChange && onChange(e.target.value)}
        />
        <ButtonStyle big={big} onClick={() => onClick()}>{btnText}</ButtonStyle>
    </InputDiv>
);

export default LSearch;
