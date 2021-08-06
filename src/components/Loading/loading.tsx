import React from 'react';
import {Icon} from '../Icon/Icon';
import styled from 'styled-components';
import classNames from 'classnames';

const LoadingContent = styled.div`
  display: inline-block;
  position: relative;
  z-index: 9999999;
  & > .animateBox {
    display: inline-block;
    animation: rotate 1s infinite;
    -webkit-animation: rotate 1s infinite;
    @keyframes rotate {
      0%{
          transform:rotate(0deg);
          -ms-transform:rotate(0deg);     /* IE 9 */
          -moz-transform:rotate(0deg);    /* Firefox */
          -o-transform:rotate(0deg);
      }
      100% {
          transform:rotate(360deg);
          -ms-transform:rotate(360deg);   /* IE 9 */
          -moz-transform:rotate(360deg);  /* Firefox */
          -o-transform:rotate(360deg);    
      }
    }
  }
  &.is-mask{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.is-pos{
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export interface LoadingProps {
  size?: '1x' | '2x' | '3x' | '4x' | '5x';
  color?: string;
  mask?: boolean;
  className?: string;
  absolute?: boolean;
}

const Loading: React.FC<LoadingProps> = (props) => {
  const {size, color, mask, absolute, className} = props;
  const classes = classNames(className, {
    'is-mask': mask,
    'is-pos': absolute,
  });
  return (
    <LoadingContent className={classes}>
      <div className="animateBox">
        <Icon className="" icon="spinner" size={size || '2x'} color={color} />
      </div>
    </LoadingContent>
  );
};

export default Loading;
