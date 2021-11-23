import React, {memo} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const ButtonContent = styled.button`
  border: none;
  border: 1px solid #0d6efd;
  background: #0d6efd;
  border-radius: 2px;
  padding: 0px 15px;
  font-size: 14px;
  min-height: 36px;
  font-weight: 400;
  color: #fff;
  transition: all 0.3s ease-in 0s;
  &:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }
  &.btn-small {
    font-size: 12px;
    padding: 0 10px;
    min-height: 26px;
  }
  &.btn-large {
    min-height: 46px;
    font-size: 16px;
  }
  &.disabled {
    box-shadow: none !important;
    cursor: default;
    opacity: 0.4;
  }
  &.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
    &.hollow {
      background-color: transparent;
      color: #0d6efd;
    }
  }
  &.btn-success {
    background-color: #198754;
    border-color: #198754;
    &.hollow {
      background-color: transparent;
      color: #198754;
    }
  }
  &.btn-info {
    background-color: #0dcaf0;
    border-color: #0dcaf0;
    &.hollow {
      background-color: transparent;
      color: #0dcaf0;
    }
  }
  &.btn-warning {
    background-color: #ffc107;
    border-color: #ffc107;
    &.hollow {
      background-color: transparent;
      color: #ffc107;
    }
  }
  &.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
    &.hollow {
      background-color: transparent;
      color: #dc3545;
    }
  }
  &.btn-light {
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    color: #333;
  }
  &.btn-dark {
    background-color: #212529;
    border-color: #212529;
    &.hollow {
      background-color: transparent;
      color: #212529;
    }
  }

  &.btn-solid {
    border: 1px solid #3c64b1;
    background-color: #3c64b1;
    color: #fff;
    &:hover {
      box-shadow: rgb(0, 0, 0, 0.25) 0px 4px 4px;
    }
  }
`;

type ButtonAllProps = React.ButtonHTMLAttributes<HTMLElement>;
type ButtonSize = 'small' | 'large';
type ButtonType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface BtnProps extends ButtonAllProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  buttonType?: ButtonType;
  hollow?: boolean;
}

export const Button = memo((props: BtnProps) => {
  const {
    children,
    className,
    disabled,
    size,
    buttonType,
    hollow,
    ...restProps
  } = props;

  const classes = classNames(className, {
    [`btn-${size}`]: size,
    [`btn-${buttonType}`]: buttonType,
    disabled: disabled || undefined,
    hollow: hollow,
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonContent disabled={ disabled } className={classes} {...restProps}>
      {children}
    </ButtonContent>
  );
});
