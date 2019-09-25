import React, { Children } from 'react';
import ButtonStyle from './buttonStyle';

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

export default Button;
