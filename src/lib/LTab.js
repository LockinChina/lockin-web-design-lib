import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TabDiv = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(100, 100, 100, 1);
  padding: 0 ${props => (props.isHomeWidth ? '10px' : '30px')};
  position: relative;
  cursor: pointer;
  height: 51px;
  line-height: 51px;
  &:hover {
    color: rgba(0, 0, 153, 1);
  }
  .nav-tip {
    position: absolute;
    line-height: 18px;
    background: rgba(249, 85, 120, 1);
    border-radius: 11px;
    color: rgba(255, 255, 255, 1);
    display: block;
    right: -20px;
    font-size: 12px;
    padding: 0 8px;
    cursor: pointer;
    top: 0;
  }
  ${props =>
    props.isHaveHover &&
    css`
      &:hover {
        background: #f8f8f8;
      }
    `}
  ${props =>
    props.select &&
    css`
      color: rgba(0, 0, 153, 1);
      &:after {
        position: absolute;
        content: '';
        left: ${props.isSelectAllBorder ? '10%' : '50%'};
        bottom: 0;
        width: ${props.isSelectAllBorder ? '80%' : '30px'};
        height: 2px;
        border-radius: 2px;
        background-color: rgba(0, 0, 153, 1);
        margin-left: -15px;
      }
    `};
  ${props =>
    props.IconName !== '' &&
    css`
      font-family: 'lockinu' !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
      padding-left: 25px;
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        font-size: ${props.IconSize ? `${props.IconSize}px` : '14px'};
      }
    `}
`;

const LTab = ({
  data,
  selectIndex,
  onClick,
  isHaveHover = false,
  isHomeWidth = false,
  isSelectAllBorder = false,
}) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    {data.map((item, index) => (
      <TabDiv
        key={`LTab${index + 1}`}
        select={Number(index) === Number(selectIndex)}
        onClick={() => onClick(index)}
        IconName={item.IconName || ''}
        IconSize={item.IconSize || ''}
        className={`${item.IconName ? `${item.IconName}` : ''}`}
        isHaveHover={isHaveHover}
        isHomeWidth={isHomeWidth}
        isSelectAllBorder={isSelectAllBorder}
      >
        {item.name}
        {item.tip && <span className="nav-tip">{item.tip}</span>}
      </TabDiv>
    ))}
  </div>
);

LTab.propTypes = {
  data: PropTypes.array,
  selectIndex: PropTypes.number,
  onClick: PropTypes.func,
  isHaveHover: PropTypes.bool,
  isHomeWidth: PropTypes.bool,
  isSelectAllBorder: PropTypes.bool,
};

export default LTab;
