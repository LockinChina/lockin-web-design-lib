import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './buttonStyle';

const Button = ({
  titleName,
  children,
  invalid,
  onClick,
  style,
  className,
  iconSize,
  iconColor,
  solid,
  hollow,
  iconName,
}) => (
  <ButtonStyle
    solid={solid}
    hollow={hollow}
    invalid={invalid}
    onClick={() => {
      if (!invalid) {
        onClick(titleName);
      }
    }}
    style={style}
    className={className}
  >
    {iconName && (
      <span
        className={`iconfont ${iconName || ''}`}
        style={{ fontSize: `${iconSize}px`, color: `${iconColor}` }}
      />
    )}
    {Children ? Children.toArray(children) : null}
    {titleName}
  </ButtonStyle>
);

Button.defaultProps = {
  titleName: '',
  children: '',
  onClick: () => {},
};

Button.propTypes = {
  titleName: PropTypes.string,
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
