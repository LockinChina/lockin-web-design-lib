import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DatePickerContainer from './datePickerStyle';

let setYear: any = '';
let setMonth: any = '';
let setDay: any = '';
const today = new Date();

const tbb = (n: number) => {
  return n < 10 ? `0${n}` : `${n}`;
};

const monthDays = (date: string | number | Date) => {
  // 获取月份的总天数
  const curDate = date ? new Date(date) : new Date();
  const year = curDate.getFullYear();
  const month = curDate.getMonth() + 1;
  const d = new Date(year, month, 0);
  //  console.log(typeof d.getDate());
  return d.getDate();
};
monthDays('2019-10-01');

export interface DatePickerProps {
  placeholder?: string; // 占位文字
  titleName?: string; // 标题
  defaultValue?: any; // 默认值
  wrongText?: string; // 错误文本
  maxLength?: number; // 最大长度
  width?: number; // 宽度
  insideWidth?: number;
  invalid?: boolean; // 失效状态
  hasDay?: boolean; // 是否显示'日'选项
  name?: any;
  type?: any; // gTime 毕业时间加5年 NOW 至今 NoExp 无经验
  onChange?: (tim1: any, time2?: any, time3?: any) => void; // 选择事件
}

const DatePicker = React.forwardRef((props: DatePickerProps, ref: any) => {
  const {placeholder, titleName, defaultValue, wrongText, onChange,
    maxLength, width, insideWidth, invalid, hasDay, name, type} = props;
  const [selectValue, setSelectVlue] = useState(''); //
  const [yearIndex, setYearIndex] = useState(-100);
  const [monthIndex, setMonthIndex] = useState(-100);
  const [isShow, setIsShow] = useState(false); // 显示隐藏

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      const element = e.target as Element;
      if (e.target && element.matches('li')) {
        return;
      }
      setIsShow(false);
    });
    setSelectVlue(defaultValue);
  }, [defaultValue]);

  const year = () => {
    let years = new Date().getFullYear();
    let arr: any[] = [];
    // if(props.type === 'now'){
    //   arr = [...arr, 'now']
    // }
    // if(props.type === 'noExp'){
    //   arr = [...arr, 'noExp']
    // }
    if (props.type === 'gTime') {
      years = Number(years) + 5;
    }
    for (let i = years; i >= 1966; i--) {
      arr = [...arr, i];
    }
    return (
      <ul className='scrollbar'>
        {type && type !== 'gTime' && (
          <li
            onClick={() => {
              setSelectVlue(type);
              if (type && type !== 'gTime') {
                onChange && onChange(type);
              }
            }}
          >
            {type}
          </li>
        )}
        {arr.map((item, index) => (
          <li
            key={item}
            className={index === yearIndex ? 'actived' : ''}
            onClick={(e) => {
              e.stopPropagation();
              // setIsShow(false);
              setYearIndex(index);
              setYear = String(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const month = () => {
    let months = 12;
    if (today.getFullYear() === Number(setYear) && props.type !== 'gTime') {
      months = today.getMonth() * 1 + 1;
    }
    let arr: any[] = [];
    // console.log(`months: ${months}`)
    for (let i = 1; i <= months; i++) {
      arr = [...arr, tbb(i)];
    }
    // console.log(arr);
    return (
      <ul className='scrollbar'>
        {arr.map((item, index) => (
          <li
            key={item}
            className={monthIndex === index && yearIndex !== -100 ? 'actived' : ''}
            style={{color: yearIndex === -100 ? '#ccc' : ''}}
            onClick={(e) => {
              e.stopPropagation();
              if (yearIndex !== -100) {
                setMonth = String(item);
                setMonthIndex(index);
                if (!hasDay) {
                  onChange && onChange([setYear, setMonth]);
                  setIsShow(false);
                  setSelectVlue(`${setYear}-${setMonth}`);
                }
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const day = () => {
    let days = 30;
    const d = monthDays(`${setYear}-${setMonth}`);
    let arr: any[] = [];
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(d)) {
      days = d;
    }
    for (let i = 1; i <= days; i++) {
      arr = [...arr, tbb(i)];
    }
    return (
      <ul className='scrollbar'>
        {arr.map((item) => (
          <li
            key={item}
            style={{color: monthIndex === -100 ? '#ccc' : ''}}
            onClick={(e) => {
              e.stopPropagation();
              if (yearIndex !== -100 && monthIndex !== -100) {
                setDay = String(item);
                onChange && onChange([setYear, setMonth, setDay]);
                setIsShow(false);
                setSelectVlue(`${setYear}-${setMonth}-${setDay}`);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <DatePickerContainer style={{width: `${width}px`}}>
      <p className='title' style={{display: titleName ? 'block' : 'none'}}>
        {titleName}
      </p>
      <div className='box' style={{position: 'relative'}}>
        <div
          className={`inputBody fadeAnim ${isShow ? 'openActive ' : ''}
          ${wrongText ? 'textWrong ' : ''}${invalid ? 'invalid ' : ''}`}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            if (!invalid) {
              setIsShow(!isShow);
              setYear = [];
              setMonth = [];
              setDay = [];
              setYearIndex(-100);
              setMonthIndex(-100);
            }
          }}
        >
          <input
            defaultValue={defaultValue}
            placeholder={placeholder}
            className='text '
            maxLength={maxLength}
            readOnly
            value={selectValue}
            ref={ref}
            name={name}
          />
          <span className={`iconfont arrow ${isShow ? 'iconshouhui' : 'iconxiala1'}`}
            style={{color: isShow ? '#005ED4' : ''}} />
          <div className='select-box animated-fast fadeInDown'
            style={{display: isShow ? 'block' : 'none'}}>
            <div className='rowbox' style={{width: `${insideWidth}px`}}>
              {year()}
              {month()}
              {hasDay && day()}
            </div>
          </div>
        </div>
      </div>
      <p className='wrongText' style={{display: wrongText ? 'block' : 'none'}}>
        {wrongText}
      </p>
    </DatePickerContainer>
  );
});

export default DatePicker;

// DatePicker.defaultProps = {
//   type: 'text',
//   col: 1,
//   placeholder: '请选择',
//   onChange: () => { },
//   rightIconOnClick: () => { },
// };

DatePicker.displayName = 'DatePicker';

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  titleName: PropTypes.string,
  defaultValue: PropTypes.string,
  wrongText: PropTypes.string,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  insideWidth: PropTypes.number,
  invalid: PropTypes.bool,
  hasDay: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
};
