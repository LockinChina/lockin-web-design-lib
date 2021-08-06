import React, {ReactNode} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const CardContent = styled.div`
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 20px;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  &.disabled {
    cursor: default;
    &:hover {
      transform: none;
    }
  }
`;

export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  className,
  style,
  children,
  onClick,
  disabled,
}) => {
  const handelClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const classes = classNames(className, {
    disabled,
  });

  return (
    <CardContent className={classes} style={style} onClick={handelClick}>
      {children}
    </CardContent>
  );
};

export default Card;
