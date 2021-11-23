/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {FC} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const RaidoContent = styled.div`
  display: inline-block;
  position: relative;
  padding-left: 30px;
  line-height: 20px;
  height: 20px;
  cursor: pointer;
  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #c3cbcd;
    box-sizing: border-box;
    border-radius: 100px;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.disabled {
    opacity: 0.5;
    cursor: default;
  }
  &.checked {
    &::before {
      transition: all 0.3s ease-in;
      border: 2px solid #3c64b1;
    }
    &::after {
      position: absolute;
      top: 5px;
      left: 5px;
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      background: #3c64b1;
      border-radius: 100%;
    }
  }
`;

export interface RadioProps {
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Raido: FC<RadioProps> = (props) => {
  const {children, className, disabled, checked, onClick} = props;
  const classes = classNames('', className, {
    disabled,
    checked,
  });

  const handelClick = () => {
    if (!disabled) {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <RaidoContent onClick={handelClick} className={classes}>
      {children}
    </RaidoContent>
  );
};

export default Raido;
