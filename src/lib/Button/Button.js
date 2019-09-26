import React, { Children } from 'react';
import ButtonStyle from './buttonStyle';
import PropTypes from 'prop-types';

function Button(props) {
  const { titleName, children, invalid, onClick, style, className, iconSize, iconColor} = props;
  return (
    <ButtonStyle
      solid={props.solid}
      hollow={props.hollow}
      invalid={invalid}
      onClick={() => {
        if (!props.invalid) {
          onClick(titleName);
        }
      }}
      style={style}
      className={className}
    >
      <span 
        className={"iconfont " + (props.iconName ? props.iconName : "")}
        style={{fontSize: `${iconSize}px`, color: `${iconColor}` }}
      >
      </span>
      {Children.toArray(children)}
      {titleName}
    </ButtonStyle>
  );
}
Button.defaultProps = {
  titleName: '',
  children: '',
  onClick: ()=>{}
};

Button.propTypes = {
  titleName: PropTypes.string,
  solid: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool]),
  hollow: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool]),
  iconName: PropTypes.string,
  iconSize: PropTypes.oneOfType([ PropTypes.string, PropTypes.number]),
  iconColor: PropTypes.string,
  onClick: PropTypes.func,
  invalid: PropTypes.bool,
  style: PropTypes.oneOfType([ PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  children: PropTypes.node
};

export default Button;
