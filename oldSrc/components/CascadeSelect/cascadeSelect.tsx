import React, {useEffect, useState} from 'react';
import GlobalStyle from '../globalStyle';
import classNames from 'classnames';
import CascadeContent from './style';
import Input, {InputProps} from '../Input';
import Transition from '../Transition';


interface dataApiProps {
  label?: string;
  value?: number | string;
  children?: any;
}

export type transitionProps = 'zoomIn' | 'fadeInDown';

export interface CascadeProps extends Omit<InputProps, 'defaultValue'> {
  className?: string;
  style?: React.CSSProperties;
  dataApi?: dataApiProps[];
  disabled?: boolean;
  col?: number;
  selectContentStyle?: React.CSSProperties;
  onSelectCallback: (item: dataApiProps) => void;
  defaultValue?: {label?: string, value?: string | number}
  transition?: transitionProps;
  timeout?: number;
}

const CascadeSelect:React.FC<CascadeProps> = (props) => {
  const {
    className,
    style,
    dataApi,
    disabled,
    onSelect,
    col,
    selectContentStyle,
    onSelectCallback,
    defaultValue,
    transition,
    timeout,
    ...restProps
  } = props;

  const [isShow, setIsShow] = useState(false); // 下拉菜单开关
  const [inputValue, setInputValue] = useState<string | any>(defaultValue?.label || ''); // 选中的文字
  const [oneActiveIndex, setOneActiveIndex] = useState(-100); // 第一列选中 index
  const [twoActiveIndex, setTwoActiveIndex] = useState<number>(-100); // 第二列选中 index

  const classes = classNames(className, {
    'is-show': isShow,
    'no-hover': disabled,
  });


  useEffect(() => {
    // console.log(dataApi);
    document.addEventListener('click', (e) => {
      setIsShow(false);
    });
  }, []);


  // 根据 prop col 设置列数样式
  const setRowBoxClasses = classNames('row-box', {
    'first-row': col === 1,
    'second-row': col == 2,
    'third-row': col === 3,
  });

  // 生成 li
  const renderItem = (data: any, activeIndex: number,
      callback: (item: dataApiProps, index: number) => void) => {
    if (data && data.length > 0) {
      return data.map((item:dataApiProps, index: number) => (
        <li
          className={index === activeIndex ? 'actived' : ''}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            callback(item, index);
          }}
          key={item.value}
        >
          {item.label}
        </li>
      ));
    }
  };

  // 第一列事件
  const firstCallback = (item:any, i: number) => {
    if (col && col > 1) {
      setOneActiveIndex(i);
    } else {
      setInputValue(item.label);
      onSelectCallback(item);
      initState();
    }
  };

  const initState = () => {
    setIsShow(false);
    setOneActiveIndex(-100);
    setTwoActiveIndex(-100);
  };

  const secondCallback = (item:any, i: number) => {
    if (col && col > 2) {
      setTwoActiveIndex(i);
    } else {
      const value = dataApi && dataApi[oneActiveIndex].label;
      setInputValue(`${value} ${item.label}`);
      onSelectCallback(item);
      initState();
    }
  };

  const thirdCallback = (item: any, i: number) => {
    if (col && col > 3) {
      // setTwoActiveIndex(i);
    } else {
      const valueOne = dataApi && dataApi[oneActiveIndex].label;
      const valueTwo = dataApi && dataApi[oneActiveIndex].children[twoActiveIndex].label;
      setInputValue(`${valueOne} ${valueTwo} ${item.label}`);
      onSelectCallback(item);
      initState();
    }
  };

  return (
    <>
      <CascadeContent className={classes} style={style}>
        <Input
          value={inputValue}
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) {
              setIsShow(true);
            }
          } }
          {...restProps}
        />
        <Transition
          addEndListener={()=> {}}
          transition={transition}
          in={isShow}
          timeout={timeout}
        >
          <div className="select-box" style={selectContentStyle} >
            <div className={setRowBoxClasses}>
              {/* 第一列 */}
              <ul className="rol-box">
                {renderItem(dataApi, oneActiveIndex, (item, index) => firstCallback(item, index) )}
              </ul>

              {/* 第二列 */}
              {col && col >= 2 && oneActiveIndex !== -100 && (
                <ul className="rol-box">
                  {renderItem(dataApi && dataApi[oneActiveIndex]?.children,
                      twoActiveIndex, (item, index) => secondCallback(item, index) )}
                </ul>
              )}

              {/* 第三列 */}
              {col && col >= 3 && oneActiveIndex !== -100 && twoActiveIndex !== -100 &&(
                <ul className="rol-box">
                  {renderItem(dataApi &&
                  dataApi[oneActiveIndex]?.children[twoActiveIndex]?.children,
                  -100, (item, index) => thirdCallback(item, index) )}
                </ul>
              )}
            </div>
            <div style={{clear: 'both', height: '0px', fontSize: '0px', overflow: 'hidden'}} />
          </div>
        </Transition>

      </CascadeContent>
      <GlobalStyle />
    </>
  );
};


CascadeSelect.defaultProps = {
  col: 1,
  transition: 'zoomIn',
  timeout: 0,
};

export default CascadeSelect;
