import React from 'react';

/**
 * 按钮的props
 */
interface ButtonProps {
    /**
     * 背景颜色
     */
    backgroundColor?: string;
    /**
     * 按钮尺寸
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 按钮文字
     */
    label: string;
    /**
     * 可选的按钮事件
     */
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export {Button};
