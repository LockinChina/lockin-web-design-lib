import styled, { css } from 'styled-components';

const defaultBtn = css`
  background: none;
  outline: none;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 0 30px;
  transition: all 0.2s linear 0s; -moz-transition: all 0.2s linear 0s; -webkit-transition: all 0.2s linear 0s;
  color: #000099;
  :hover {
    background: #fff;
  }
  :active {
    background: rgba(240, 246, 255, 1);
  }
  span {
    font-family: 'iconfont', 'lockinu';
    color: green;
    vertical-align: middle;
    margin-right: 4px;
  }
`;

const btnSolid = css`
  background: #000099;
  color: #fff;
  &:hover {
    background: #004ec9;
  }
  &:active {
    background: #000099;
  }
`;

const btnHollow = css`
  background: #fff;
  border: 1px solid #000099;
  color: #000099;
  &:hover {
    background: #ecf3ff;
  }
  &:active {
    background: #fff;
  }
`;

const invalid = css`
  opacity: 0.4;
  -webkit-filter: grayscale(100%);
  filter: gray;
  :hover {
    cursor: default;
  }
`;

const ButtonStyle = styled.button`
  ${defaultBtn}
  ${props => props.invalid && invalid}
  ${props => props.solid && btnSolid}
  ${props => props.hollow && btnHollow}
`;

export default ButtonStyle;
