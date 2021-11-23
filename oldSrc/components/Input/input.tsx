import React, {useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const InputContent = styled.div`
  /* display: inline-block; */
  border: 1px solid #f4f5f4;
  border-radius: 3px;
  background: #f4f5f4;
  padding: 0 10px;
  height: 38px;
  transition: all 0.4s ease-in;
  &.focus,
  &:hover {
    border: 1px solid #3c64b1;
  }
  &.disabled,
  &.disabled:hover {
    opacity: 0.5;
    border: 1px solid rgb(205, 205, 205);
  }
  &.wrong {
    border-color: red !important;
  }
  &.input-small {
    height: 38px;
  }
  &.input-large {
    height: 44px;
  }
  .i-content {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: auto;
    .l {
      margin-right: 10px;
    }
    .r {
      margin-left: 10px;
    }
    .l,
    .r {
      color: #333;
    }
    input {
      outline: none;
      flex: 1;
      background: none;
      height: 100%;
      border: none;
      font-size: 14px;
      width: 100%;
      &::placeholder {
        color: 737b7d;
      }
    }
  }
`;

type InputAllProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'size'>;

type InputSize = 'large' | 'small';

export interface InputProps extends InputAllProps {
  disabled?: boolean;
  className?: string;
  leftContent?: string | React.ReactElement;
  rightContent?: string | React.ReactElement;
  size?: InputSize;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  wrong?: boolean;
}
export const Input: React.FC<InputProps> = (props) => {
  const {
    disabled,
    className,
    leftContent,
    rightContent,
    size,
    onFocus,
    onBlur,
    wrong,
    style,
    ...restProps
  } = props;

  const [focusIn, setFocusIn] = useState(false);

  const classes = classNames(
      {
        disabled,
        [`input-${size}`]: size,
        focus: focusIn,
        wrong,
      },
      className,
  );
  const hancelFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusIn(true);
    onFocus && onFocus(e);
  };

  const handelBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocusIn(false);
    onBlur && onBlur(e);
  };

  return (
    <InputContent className={classes} style={style}>
      <div className="i-content">
        {leftContent && <div className="l">{leftContent}</div>}
        <input
          onFocus={(e) => hancelFocus(e)}
          onBlur={(e) => handelBlur(e)}
          disabled={disabled}
          {...restProps}
        />
        {rightContent && <div className="r">{rightContent}</div>}
      </div>
    </InputContent>
  );
};
