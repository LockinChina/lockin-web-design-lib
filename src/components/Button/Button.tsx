/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */
import React, {Children} from 'react';
import ButtonStyle from './buttonStyle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  titleName?: string; // 按钮文字
  children?: React.ReactNode; // 可以插入 html任意标签 入 span img 等
  invalid?: boolean; // 失效状态
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // 点击事件
  style?: React.CSSProperties; // style 样式
  className?: string; // 添加类名
  iconName?: string; // 图标名 仅限iconfont库已添加的
  iconSize?: number; // 图标大小
  iconColor?: string; // 图标颜色
  solid?: any; // 实心样式
  hollow?: any; // 空心样式
}

const Button: React.FC<ButtonProps> = (props) => {
  const {titleName, children, invalid, onClick, style,
    className, iconSize, iconColor, ...restProps} = props;
  return (
    <ButtonStyle
      solid={props.solid}
      hollow={props.hollow}
      invalid={invalid}
      onClick={(e) => {
        if (!props.invalid) {
          onClick && onClick(e);
        }
      }}
      style={style}
      {...restProps}
    >
      {props.iconName && (
        <span className={`iconfont ${props.iconName ? props.iconName : ''}`}
          style={{fontSize: `${iconSize}px`, color: `${iconColor}`}} />
      )}
      {Children.toArray(children)}
      {titleName}
    </ButtonStyle>
  );
};
Button.defaultProps = {
  titleName: '',
  onClick: () => {},
};

export default Button;
