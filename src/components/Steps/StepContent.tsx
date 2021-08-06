/* eslint-disable react/prop-types */
import React from 'react';
import StepsContainer from './style';
import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
import {StepItemProps} from './StepItem';

export interface StepsProps {
  className?: string;
  col?: boolean;
  selectIndex: number;
  style?: React.CSSProperties;
}

export const StepContent: React.FC<StepsProps> = (props) => {
  const {children, className, col, selectIndex, style} = props;
  const classes = classNames(className, {
    col: col,
  });

  const renderItem = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<StepItemProps>;
      const {stepTitle} = childElement.props;
      return (
        <div className={`item ${selectIndex >= index ? 'actived' : ''}`}>
          <div className='top'>
            <div className='disc'>{stepTitle}</div>
            <div className='solid'></div>
          </div>
          <div className='content'>{child}</div>
        </div>
      );
    });
  };
  return (
    <StepsContainer className={classes} style={style}>
      {renderItem()}
    </StepsContainer>
  );
};
