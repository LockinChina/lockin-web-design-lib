import React, {useState, useEffect, FC} from 'react';
import Input, {InputProps} from '../Input';
import DatePickerContent from './style';
import GlobalStyle from '../globalStyle';
import classNames from 'classnames';
import Transition from '../Transition';
import {transitionProps} from '../CascadeSelect/cascadeSelect';


type DateType = 'gTime' | 'now';
export interface DatePickerProps extends InputProps {
  className?: string;
  style?: React.CSSProperties;
  onSelectCallback?: (date: string) => void;
  dateType?: DateType,
  disabled?: boolean;
  hasDay?: boolean;
  defaultValue?: string;
  transition?: transitionProps;
  timeout?: number;
}


let selectYear = '';
let selectMonth = '';

const DatePicker: FC<DatePickerProps> = (props) => {
  const {
    transition,
    timeout,
    className,
    style,
    dateType,
    defaultValue,
    disabled,
    onSelectCallback,
    hasDay,
    ...restProps
  } = props;

  const [isShow, setIsShow] = useState(false); // 下拉层开关
  const [inputValue, setInputValue] = useState(defaultValue || '');
  const [oneActiveIndex, setOneActiveIndex] = useState(-100); // 年份当前选中状态
  const [twoActiveIndex, setTwoActiveIndex] = useState(-100); // 月份选中状态
  const [fetchDays, setFetchDays] = useState(30);

  const claaes = classNames(className, {
    'is-show': isShow === true,
    'no-hover': disabled,
  });

  const mouthHaveDays = (date: string) => {
    // 获取月份的总天数
    const curDate = date ? new Date(date) : new Date();
    const year = curDate.getFullYear();
    const month = curDate.getMonth() + 1;
    const d = new Date(year, month, 0);
    return d.getDate();
  };

  // 年份渲染函数
  const renderYear = () => {
    let year = new Date().getFullYear();
    const arr = [];
    if (dateType === 'now') {
      arr.push('至今');
    }
    if (dateType === 'gTime') {
      year += 5;
    }
    for (let i = year; i >= 1966; i --) {
      arr.push(i);
    }
    const renderItem = arr.map((item, index) => {
      const liCalss = classNames({
        actived: index === oneActiveIndex,
      });
      const yearHandelClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.stopPropagation();
        if (item === 'now' || item === '至今' || item === 'NOW') {
          setInputValue(item);
          onSelectCallback && onSelectCallback(item.toString());
          resetState();
        } else {
          setOneActiveIndex(index);
          selectYear = item.toString();
        }
      };
      return (
        <li
          onClick={(e) => yearHandelClick(e)}
          className={liCalss}
          key={item}>{item}
        </li>
      );
    });
    return <ul>{renderItem}</ul>;
  };

  // 月份渲染函数
  const renderMonth = () => {
    const arr = [];
    for (let i = 1; i<=12; i++) {
      arr.push(i<10 ? `0${i}`: i);
    }
    const setMonthClass = classNames({
      'disabled': oneActiveIndex === -100,
    });

    const renderItem = arr.map((item, index) => {
      const monthHandelClcik = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.stopPropagation();
        if (oneActiveIndex !== -100) {
          selectMonth = item.toString();
          if (hasDay) {
            setTwoActiveIndex(index);
          } else {
            selectMonth = item.toString();
            setInputValue(`${selectYear}-${selectMonth}`);
            resetState();
            onSelectCallback && onSelectCallback(`${selectYear}-${selectMonth}`);
          }
        }
      };
      const setClassName = classNames({
        'actived': index === twoActiveIndex,
      });
      return (
        <li
          className={setClassName}
          onClick={(e) => monthHandelClcik(e)}
          key={item}
        >
          {item}
        </li>
      );
    });
    return <ul className={setMonthClass}>{renderItem}</ul>;
  };


  useEffect(() => {
    console.log(selectYear);
    console.log(selectMonth);
    if (selectYear && selectMonth) {
      const day = mouthHaveDays(`${selectYear}-${selectMonth}`);
      setFetchDays(day);
    }
  }, [twoActiveIndex]);

  useEffect(() => {
    document.addEventListener('click', (e: MouseEvent) => {
      setIsShow(false);
    });
  }, []);

  // 天渲染函数
  const renderDays = () => {
    const arr = [];
    for (let i = 1; i<= fetchDays; i ++) {
      arr.push(i < 10 ? `0${i}` : `${i}`);
    }
    const setClassName = classNames({
      disabled: twoActiveIndex === -100,
    });
    const renderItem = arr.map((item) => {
      const dayHandelClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.stopPropagation();
        if (twoActiveIndex !== -100) {
          const value = `${selectYear}-${selectMonth}-${item}`;
          setInputValue(value);
          onSelectCallback && onSelectCallback(value);
          resetState();
        }
      };
      return <li onClick={ (e) =>dayHandelClick(e)} key={item}>{item}</li>;
    });
    return <ul className={setClassName}>{renderItem}</ul>;
  };

  // 重置 State
  const resetState = () => {
    setOneActiveIndex(-100);
    setTwoActiveIndex(-100);
    setIsShow(false);
  };

  return (
    <>
      <DatePickerContent className={claaes} style={style}
      >
        <Input
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            setIsShow(true);
          }}
          value={inputValue}
          disabled={disabled}
          {...restProps}
        />
        <Transition
          addEndListener={()=> {}}
          transition={transition}
          in={isShow}
          timeout={timeout}
        >
          <div className="select-box">
            <div className="row-box">
              {renderYear()}
              {renderMonth()}
              {hasDay && renderDays()}
            </div>
          </div>
        </Transition>
      </DatePickerContent>
      <GlobalStyle />
    </>
  );
};

DatePicker.defaultProps = {
  transition: 'zoomIn',
  timeout: 0,
};

export default DatePicker;
