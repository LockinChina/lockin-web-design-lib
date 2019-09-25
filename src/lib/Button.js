import styled, { css } from 'styled-components';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import '../iconfont/iconfont.css';

function ButtonStyle (props){
    // type 按钮样式4种 hasIcon 是否有Icon
    const { type, onClick, hasIcon, style, className, IconName, width } = props;
    const ButtonBasic = css`
        font-size: 16px;
        padding: 0 30px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        cursor: pointer;
        position: relative;
        &:focus{ outline: none; }
        ${width && css`
            width: ${width}px;
        `}
    `;

    let ButtonStyle = styled.button`
        ${ButtonBasic};
        ${type === 1 && css`
            color: #fff;
            background-color: #000099;
            &:hover {
              background-color:rgba(0,78,201,1);
            };
            &:active {
              background-color: rgba(0,0,153,1);
            };
        `};
        ${type === 2 && css`
            color: #000099;
            background-color: #fff;
            border: 1px solid #000099;
            &:hover {
              background-color: rgba(236,243,255,1);
              border-color: rgba(0,0,153,1);
            };
            &:active {
              border-color: rgba(0,0,153,1);
            };
        `};
        ${type === 3 && css`
            color: #535353;
            background-color: #fff;
            border:1px solid rgba(90,90,90,1);
            &:hover {
              color: rgba(143,143,143,1);
              border-color: rgba(143,143,143,1);
            };
            &:active {
              border-color: rgba(90,90,90,1);
            };
        `};
        ${type === 4 && css`
            color: #000099;
            background-color: #fff;
            border:none;
            &:hover {
              background:rgba(246,250,255,1);
            };
            &:active {
              background:rgba(240,246,255,1);
            };
        `};
    `;

    let IconDiv = styled.div`
      font-family: "lockinu" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
      &:before {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 12px;
      }
      ${hasIcon && css`
          padding-left: 20px;

      `};
    `;

    return (
        <ButtonStyle type={type} className={className} style={style} hasIcon={hasIcon} onClick={() => onClick()}>
            <IconDiv className={`${hasIcon ? `${IconName}` : ''}`}>
                {Children.toArray(props.children)}
            </IconDiv>
        </ButtonStyle>
    );
}

ButtonStyle.propTypes = {
    type: PropTypes.number,
    onClick: PropTypes.func,
    hasIcon: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    IconName: PropTypes.string,
    width: PropTypes.number,
};

ButtonStyle.defaultProps = {
    type: 1,
    onClick: () => {},
    hasIcon: false,
    style: {},
    className: '',
    IconName: '',
};

export default ButtonStyle;