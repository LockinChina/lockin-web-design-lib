import React from 'react';
import './button.css';

/**
 * button 属性 props
 */
export interface ButtonProps {
  /**
   * 是否当前页面主按钮（颜色为深色）
   */
  primary?: boolean;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 尺寸
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 按钮文字
   */
  label: string;
  /**
   * 是否含有onclick 事件
   */
  onClick?:
  (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

/**
 * Lockin 按钮控件
 */
const Button = ({
  primary = true,
  backgroundColor,
  size = 'medium',
  onClick,
  label,
}: ButtonProps) => {
  const mode = primary ?
    'storybook-button--primary' :
    'storybook-button--secondary';

  /**
   * return component
   */
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
          ' ',
      )}
      style={backgroundColor ? {backgroundColor}: {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
