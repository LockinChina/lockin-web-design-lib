import React, {FC} from 'react';
import GlobalStyle from '../globalStyle';
import LabelContent from './style';
import classNames from 'classnames';

type LabelSize = 'default' | 'large' | 'small';

export interface LabelProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactElement | string;
  size?: LabelSize;
  checked?: boolean;
  disabled?: boolean;
}

const Label: FC<LabelProps> = (props) => {
  const {className, style, children, onClick, size, checked, disabled} = props;
  const classes = classNames( {
    [`${size}`]: size,
    'hover': onClick,
    'checked': checked,
    'disabled': disabled,
  }, className);

  const handelClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <>
      <LabelContent
        className={classes}
        style={style}
        onClick={handelClick}
      >
        {children}
      </LabelContent>
      <GlobalStyle/>
    </>
  );
};

Label.defaultProps = {
  size: 'default',
};

export default Label;
