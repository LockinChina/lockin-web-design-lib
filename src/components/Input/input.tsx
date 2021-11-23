import React, {useState, Children} from 'react';
import PropTypes from 'prop-types';
import InputContainer from './inputStyle';

export interface InputProps extends React.InputHTMLAttributes<HTMLElement> {
  value?: any;
  placeholder?: string; // 占位文字
  titleName?: string; // 标题
  onChange?: (e: any) => void; // onChange事件
  leftIconName?: string; // 左侧图标名
  leftIconColor?: string; // 左侧图标颜色
  leftIconSize?: number;// 左侧图标大小
  rightIconName?: string; // 右侧图标名
  rightIconColor?: string; // 右侧图标颜色
  rightIconSize?: number; // 右侧图标大小
  rightIconTitle?: string; // 右侧图标title(鼠标悬停提示)
  rightIconOnClick?: () => void; // 右侧图标点击事件
  defaultValue?: string; // 默认值
  wrongText?: string; // 错误文本
  type?: any; // type属性
  maxLength?: number; // 最大长度
  width?: number; // 宽度
  readOnly?: boolean; // 只读
  name?: any;
  inputBorderColor?: string; // 边框颜色
  rightIconMouseDownCapture?: () => void; // 右侧图标按下事件
  rightIconMouseUpCapture?: () => void; // 右侧图标抬起事件
  inputBackgroundColor?: string; // 背景颜色
  children?: any;
  onBlur?: (e: any) => void; // 失焦时间
  onFocus?: (e: any) => void; // 焦点事件
}


// eslint-disable-next-line react/display-name
const Input = React.forwardRef((props: InputProps, ref: any) => {
  const [blurState, setBlurState] = useState(0);
  const {
    value,
    placeholder,
    titleName,
    onChange,
    leftIconName,
    leftIconColor,
    leftIconSize,
    rightIconName,
    rightIconColor,
    rightIconSize,
    rightIconTitle,
    rightIconOnClick,
    defaultValue,
    wrongText,
    type,
    maxLength,
    width,
    readOnly,
    name,
    inputBorderColor,
    rightIconMouseDownCapture,
    rightIconMouseUpCapture,
    inputBackgroundColor,
    children,
    onBlur,
    onFocus,
    ...restProps
  } = props;

  const setBorder = () => {
    if (wrongText || (wrongText && inputBorderColor)) {
      return 'red';
    }
    if (inputBorderColor) {
      return inputBorderColor;
    }
    return '';
  };

  return (
    <InputContainer style={{width: `${width}px`}}>
      <p className='title' style={{display: titleName ? 'block' : 'none'}}>
        {titleName}
      </p>
      <div
        className={`inputBody fadeAnim ${blurState ? 'active ' : ''}
        ${readOnly ? 'readOnlyOpacity ' : ''}`}
        style={{
          borderColor: setBorder(),
          background: inputBackgroundColor || '#fff',
        }}
      >
        <span className={`iconfont ${leftIconName || ''}`}
          style={{color: `${leftIconColor}`, fontSize: `${leftIconSize}px `}} />
        <input
          ref={ref}
          name={name}
          disabled={readOnly ? true : false}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className='text '
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={(e) => {
            const val = e.target.value;
            onChange && onChange(val);
          }}
          value={value}
          onBlur={(e) => {
            setBlurState(0);
            onBlur && onBlur(e.target.value);
          }}
          onFocus={(e) => {
            setBlurState(1);
            onFocus && onFocus(e.target.value);
          }}
          {...restProps}
        />
        <span
          title={rightIconTitle}
          onClick={() => rightIconOnClick && rightIconOnClick()}
          onMouseDownCapture={() => rightIconMouseDownCapture && rightIconMouseDownCapture()}
          onMouseUpCapture={() => rightIconMouseUpCapture && rightIconMouseUpCapture()}
          className={`iconfont ${rightIconName || ''}`}
          style={{color: `${rightIconColor}`, fontSize: `${rightIconSize}px`}}
        />
        {Children.toArray(children)}
      </div>

      <p className='wrongText' style={{display: wrongText ? 'block' : 'none'}}>
        {wrongText}
      </p>
    </InputContainer>
  );
});

Input.defaultProps = {
  type: 'text',
  placeholder: '请输入',
  onChange: () => {},
  rightIconOnClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  leftIconName: PropTypes.string,
  leftIconColor: PropTypes.string,
  leftIconSize: PropTypes.number,
  rightIconName: PropTypes.string,
  rightIconColor: PropTypes.string,
  rightIconSize: PropTypes.number,
  rightIconTitle: PropTypes.string,
  rightIconOnClick: PropTypes.func,
  rightIconMouseDownCapture: PropTypes.func,
  rightIconMouseUpCapture: PropTypes.func,
  wrongText: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  readOnly: PropTypes.bool,
  name: PropTypes.node,
  inputBorderColor: PropTypes.string,
  titleName: PropTypes.string,
  inputBackgroundColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
