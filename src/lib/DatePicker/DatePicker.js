import React, { useState, useEffect } from 'react';
import DatePickerContainer from './datePickerStyle';

let setYear = '';
let setMonth = '';
let setDay = '';
let today = new Date();

function tbb(n) {
  return n < 10 ? `0${  n}` : `${  n}`;
}

function monthDays(date) {
  // 获取月份的总天数
  let curDate = date ? new Date(date) : new Date();
  let year = curDate.getFullYear();
  let month = curDate.getMonth() + 1;
  let d = new Date(year, month, 0);
  //  console.log(typeof d.getDate());
  return d.getDate();
}
monthDays('2019-10-01');
const DatePicker = React.forwardRef((props, ref) => {
  const {
    value,
    placeholder,
    titleName,
    defaultValue,
    wrongText,
    onChange,
    maxLength,
    width,
    insideWidth,
    invalid,
    hasDay,
    name,
  } = props;
  const [selectValue, setSelectVlue] = useState(value); //
  const [yearIndex, setYearIndex] = useState(-100);
  const [monthIndex, setMonthIndex] = useState(-100);
  const [isShow, setIsShow] = useState(false); // 显示隐藏

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (e.target && e.target.matches('li')) {
        return;
      }
      setIsShow(false);
    });
    setSelectVlue(value);
  }, [value]);

  const year = () => {
    let years = new Date().getFullYear();
    let arr = [];
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
      <ul className="scrollbar">
        {props.type && props.type !== 'gTime' && (
          <li onClick={() => onChange([props.type])}>{props.type}</li>
        )}
        {arr.map((item, index) => (
              <li
                key={index}
                className={index === yearIndex ? "actived" : ""}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([item]);
                  // setIsShow(false);
                  setYearIndex(index);
                  setYear = String(item);
                }}
              >
                {item}
              </li>
            ))
        }
      </ul>
    );
  };

  const month = () => {
    let months = 12;
    if (today.getFullYear() === Number(setYear) && props.type !== 'gTime') {
      months = today.getMonth() * 1 + 1;
    }
    let arr = [];
    // console.log(`months: ${months}`)
    for (let i = 1; i <= months; i++) {
      arr = [...arr, tbb(i)];
    }
    // console.log(arr);
    return (
      <ul className="scrollbar">
        {arr.map((item, index) => (
              <li
                key={index}
                className={(monthIndex === index && yearIndex !== -100) ? "actived" : ""}
                style={{ color: yearIndex === -100 ? "#ccc" : "" }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (yearIndex !== -100) {
                    setMonth = String(item);
                    setMonthIndex(index);
                    if (!hasDay) {
                      onChange([setYear, setMonth]);
                      setIsShow(false);
                    }
                  }
                }}
              >
                {item}
              </li>
            ))
        }
      </ul>
    );
  };

  const day = () => {
    let days = 30;
    const d = monthDays(`${setYear}-${setMonth}`);
    let arr = [];
    if (!isNaN(d)) {
      days = d;
    }
    for (let i = 1; i <= days; i++) {
      arr = [...arr, tbb(i)];
    }
    return (
      <ul className="scrollbar">
        {arr.map((item, index) => (
              <li
                key={item}
                style={{ color: monthIndex === -100 ? "#ccc" : "" }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (yearIndex !== -100 && monthIndex !== -100) {
                    setDay = String(item);
                    onChange([setYear, setMonth, setDay])
                    setIsShow(false);
                  }
                }}
              >
                {item}
              </li>
            ))
        }
      </ul>
    );
  };

  return (
    <DatePickerContainer style={{ width: `${width}px` }}>
      <p className="title" style={{ display: titleName ? 'block' : 'none' }}>
        {titleName}
      </p>
      <div className="box" style={{ position: 'relative' }}>
        <div
className={`inputBody fadeAnim ${  isShow ? "openActive " : ""  }${wrongText ? "textWrong " : ""  }${invalid ? "invalid " : ""}`} onClick={(e) => {
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
            disabled="disabled"
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="text "
            maxLength={maxLength}
            readOnly="readOnly"
            value={selectValue}
            ref={ref}
            name={name}
          />
          <span
            className={
              'iconfont arrow ' + (isShow ? 'iconshouhui' : 'iconxiala1')
            }
            style={{ color: isShow ? '#005ED4' : '' }}
          />
          <div
            className="select-box animated-fast fadeInDown"
            style={{ display: isShow ? 'block' : 'none' }}
          >
            <div className="rowbox" style={{ width: `${insideWidth}px` }}>
              {year()}
              {month()}
              {hasDay && day()}
            </div>
          </div>
        </div>
      </div>
      <p
        className="wrongText"
        style={{ display: wrongText ? 'block' : 'none' }}
      >
        {wrongText}
      </p>
    </DatePickerContainer>
  );
});

export default DatePicker;

DatePickerContainer.defaultProps = {
  type: 'text',
  col: 1,
  placeholder: '请选择',
  onChange: () => {},
  rightIconOnClick: () => {},
};
