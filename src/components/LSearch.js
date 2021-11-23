import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyleInput = styled.input`
  display: inline-block;
  flex: 8;
  font-size: ${props => (props.big ? '16px' : '14px')};
  height: ${props => (props.big ? '40px' : '25px')};
  background: ${props =>
    props.inputBgColor ? `${props.inputBgColor}` : 'rgba(255, 255, 255, 1)'};
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border: none;
  line-height: 20px;
  padding: 10px 0 10px ${props => (props.big ? '20px' : '10px')};
  &:focus {
    outline: none;
  }
`;

const ButtonStyle = styled.button`
  font-size: ${props => (props.big ? '16px' : '14px')};
  padding: 0 20px;
  flex: 2;
  height: ${props => (props.big ? '40px' : '30px')};
  line-height: ${props => (props.big ? '40px' : '30px')};
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  cursor: pointer;
  position: relative;
  color: #fff;
  border: none;
  &:focus {
    outline: none;
  }
  background-color: #000099;
  &:hover {
    background-color: rgba(0, 78, 201, 1);
  }
  &:active {
    background-color: rgba(0, 0, 153, 1);
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;

const LSearch = ({
  type = 'text',
  value,
  big = true,
  onChange,
  btnText,
  onClick,
  width,
  placeholder,
  inputBgColor,
}) => (
  <InputDiv width={width}>
    <StyleInput
      type={type}
      value={value}
      placeholder={placeholder}
      big={big}
      inputBgColor={inputBgColor}
      onChange={e => onChange && onChange(e.target.value)}
    />
    <ButtonStyle big={big} onClick={() => onClick()}>
      {btnText}
    </ButtonStyle>
  </InputDiv>
);

LSearch.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  big: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  btnText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  width: PropTypes.number,
  inputBgColor: PropTypes.string,
};

export default LSearch;
