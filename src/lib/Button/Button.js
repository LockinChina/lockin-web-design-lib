/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyle';

function Button(props) {
  const {
    titleName,
    children,
    invalid,
    onClick,
    style,
    className,
    iconSize,
    iconColor,
    type,
  } = props;
  return (
    <ButtonStyle
      type={type}
      solid={props.solid}
      hollow={props.hollow}
      invalid={invalid}
      onClick={e => {
        if (!props.invalid) {
          onClick(e);
        }
      }}
      style={style}
      className={className}
    >
      {props.iconName && (
        <span
          className={`iconfont ${props.iconName ? props.iconName : ''}`}
          style={{ fontSize: `${iconSize}px`, color: `${iconColor}` }}
        />
      )}
      {Children.toArray(children)}
      {titleName}
    </ButtonStyle>
  );
}
Button.defaultProps = {
  titleName: '',
  children: '',
  type: 'button',
  onClick: () => {},
};

Button.propTypes = {
  titleName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  solid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  hollow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconName: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconColor: PropTypes.string,
  onClick: PropTypes.func,
  invalid: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
