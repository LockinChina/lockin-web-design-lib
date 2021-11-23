/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
import './animate.css';

export type AnimateProps = 'zoomIn' | 'fadeInDown';

export type TransitionProps = CSSTransitionProps & {
  transition?: AnimateProps;
  wrapple?: boolean;
};

export const Transition: React.FC<TransitionProps> = (props) => {
  const {transition, wrapple, classNames, children, ...restProps} = props;
  return (
    <CSSTransition {...restProps} classNames={transition || classNames}>
      {wrapple ? <div>{children}</div> : children}
    </CSSTransition>
  );
};
Transition.defaultProps = {
  appear: true,
  unmountOnExit: true,
};
