import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import TextAreaContainer from './textAreaStyle';


export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLElement> {
  placeholder?: string; // 占位文本
  titleName?: string; // 标题
  onChange?: (e: any) => void; // onChange事件
  leftIconName?: string; // 左侧图标名称
  leftIconColor?: string; // 左侧图标颜色
  leftIconSize?: number; // 左侧图标大小
  rightIconName?: string; // 右侧图标名称
  rightIconColor?: string; // 右侧图标颜色
  rightIconSize?: number; // 右侧图标大小
  rightIconTitle?: string; // 右侧图标title提示(鼠标悬停文本提示)
  rightIconOnClick?: () => void; // 右侧图标点击事件
  defaultValue?: string; // 默认值
  wrongText?: string; // 错误文本
  rows?: number; // 显示的行数
  maxLength?: number; // 文本最大长度
  width?: number; // 设置宽度
  name?: any; // useForm name
  readOnly?: boolean; // 只读
}

const TextArea = React.forwardRef(function(props: TextAreaProps, ref: any) {
  const [blurState, setBlurState] = useState(0);
  const {
    // value,
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
    rows,
    maxLength,
    width,
    name,
    readOnly,
    ...restProps
  } = props;
  const [sValue, setValue] = useState('');
  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);

  return (
    <TextAreaContainer style={{width: `${width}px`}}>
      <p className="title" style={{display: titleName ? 'block' : 'none'}}>
        {titleName}
      </p>
      <div
        className={`inputBody fadeAnim ${blurState ? 'active ' : ''}${
          wrongText ? 'textWrong ' : ''
        }${readOnly ? 'readOnlyOpacity ' : ''}`}
      >
        <span
          className={`iconfont ${leftIconName || ''}`}
          style={{color: `${leftIconColor}`, fontSize: `${leftIconSize}px `}}
        />
        <input type="hidden" name={name} ref={ref} value={sValue} />
        <textarea
          // name={name}
          // ref={ref}
          disabled={readOnly === true}
          // defaultValue={defaultValue}
          placeholder={placeholder}
          className="text "
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={(e) => {
            const val = e.target.value;
            onChange && onChange(val);
            setValue(val);
          }}
          value={sValue}
          rows={rows}
          onBlur={() => setBlurState(0)}
          onFocus={() => setBlurState(1)}
          {...restProps}
        />
        <span
          title={rightIconTitle}
          onClick={() => rightIconOnClick && rightIconOnClick()}
          className={`iconfont ${rightIconName || ''}`}
          style={{color: `${rightIconColor}`, fontSize: `${rightIconSize}px`}}
        />
      </div>
      <p
        className="wrongText"
        style={{display: wrongText ? 'block' : 'none'}}
      >
        {wrongText}
      </p>
    </TextAreaContainer>
  );
});

TextArea.defaultProps = {

  placeholder: '请输入',
  rows: 4,
  onChange: () => {},
  rightIconOnClick: () => {},
};

TextArea.propTypes = {
  name: PropTypes.node,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  // value: PropTypes.string,
  rows: PropTypes.number,
  wrongText: PropTypes.string,
};

TextArea.displayName = 'TextArea';

export default TextArea;
