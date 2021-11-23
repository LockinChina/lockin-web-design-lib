
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CascadeSelectContainer from './cascadeSelectStyle';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Toast from '../Toast/Toast';

let labelObj: any = [];
let valueObj: any = [];

export interface CascadeSelectProps extends React.InputHTMLAttributes<HTMLElement> {
  titleName?: string;
  defaultValue?: any;
  wrongText?: string;
  width?: number;
  dataApi?: any;
  col?: number;
  onChange?: (e: any, e2?: any) => void;
  insideWidth?: number;
  invalid?: boolean;
  nameId?: any;
  refId?: any;
  nameValue?: any;
  refValue?: any;
  max?: number;
  lang?: string;
  systemLang?: string;
}

const CascadeSelect = React.forwardRef((props: CascadeSelectProps, ref: any) => {
  const {
    titleName,
    defaultValue,
    wrongText,
    maxLength,
    width,
    dataApi,
    col,
    onChange,
    insideWidth,
    invalid,
    nameId,
    refId,
    nameValue,
    refValue,
    max,
    lang,
    systemLang,
    ...restProps
  } = props;

  const [selectValue, setSelectVlue] = useState(''); // label
  const [selectValueId, setSelectVlueId] = useState(''); // value

  const [selectData, setSelectData] = useState<any>([]); // 数据源
  const [indexOne, setIndexOne] = useState(-100); // 第一级索引
  const [indexTwo, setIndexTwo] = useState(-100); // 第二级索引
  const [isShow, setIsShow] = useState(false); // 显示隐藏
  const [selectArr, setSelectArr] = useState<any>([[], []]); // 选N项存值
  const isZh = systemLang === 'zh';
  const isCn = lang === 'cn';
  useEffect(
      function getSelectData() {
        if (dataApi) {
          if (typeof dataApi === 'string') {
            axios.get(dataApi).then((res) => {
              const {data} = res;
              setSelectData(data);
            });
          } else {
            setSelectData(dataApi);
          }
        }
      },
      [dataApi],
  );

  // useEffect(() => {
  //   if (dataApi) {
  //     console.log(dataApi);
  //   }
  // }, [dataApi]);

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      const element = e.target as Element;
      // console.log(element.matches('li, button, div'));
      if (e.target && element.matches('li, button, .maxSelectBox')) {
        return;
      }
      setIsShow(false);
    });
    // console.log('defaultValue', defaultValue);
    if (defaultValue && defaultValue.length === 2) {
      setSelectVlue(defaultValue[0].join(' | '));
      setSelectVlueId(defaultValue[1]);
    } else {
      setSelectVlue(defaultValue);
    }
  }, []);

  function maxFun(item: { label: any; value: any }) {
    const arr = [...selectArr];
    if (typeof max === 'number' && arr[0].length < max) {
      if (arr[0].indexOf(item.label) === -1) {
        arr[0].push(item.label);
        arr[1].push(item.value);
        setSelectArr(arr);
      } else {
        Toast.info(isZh ? '已添加' : 'Added');
      }
    } else {
      Toast.info(isZh ? `最多选${max}项` : `Select ${max} items at most`);
    }
  }
  const firstClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: any, index: number) => {
    e.stopPropagation();
    labelObj[0] = item.label;
    const {children} = selectData[index];
    if (children && children.length !== 0) {
      setIndexOne(index);
      setIndexTwo(-100);
    } else if (max) {
      maxFun(item);
    } else {
      valueObj = item.value;
      setIsShow(false);
      onChange && onChange(labelObj, valueObj);
      setSelectVlue(labelObj);
      setSelectVlueId(valueObj);
    }
  };
  const secondClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: any, index: number) => {
    e.stopPropagation();
    labelObj[1] = item.label;
    const {children} = selectData[indexOne].children[index];
    if (children && children.length > 0) {
      setIndexTwo(index);
    } else if (max) {
      maxFun(item);
    } else {
      setIsShow(false);
      valueObj = item.value;
      onChange && onChange(labelObj, valueObj);
      setSelectVlue(labelObj[labelObj.length - 1]);
      setSelectVlueId(valueObj);
      setIndexOne(-100);
    }
  };

  const thirdClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: { label: any; value: any }) => {
    e.stopPropagation();
    labelObj[2] = item.label;
    valueObj = item.value;
    if (max) {
      maxFun(item);
    } else {
      onChange && onChange(labelObj, valueObj);
      setSelectVlue(labelObj.join(' | '));
      setSelectVlueId(valueObj);
      // console.log(typeof valueObj);
      setIsShow(false);
      setIndexTwo(-100);
      setIndexOne(-100);
    }
  };
  // console.log('selectValue', selectValue);

  return (
    <CascadeSelectContainer style={{width: `${width}px`}}>
      {/* {`${lang} ${systemLang}`} */}
      {/* <span onClick={() => setIsShow(false)}>111</span> */}
      {/* <Label titleName="选择的名字" deleteBtnClick={() => alert(1)} hasDelete={1} /> */}
      {/* <input type="hidden" value={col} /> */}
      {/* {selectValue} - {selectValueId} - {selectArr} */}
      <p className='title' style={{display: titleName ? 'block' : 'none'}}>
        {titleName}
      </p>
      <div className='box' style={{position: 'relative'}}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={`inputBody fadeAnim ${isShow ? 'openActive ' : ''}${wrongText ? 'textWrong ' : ''}${invalid ? 'invalid ' : ''}`}
          onClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            if (!invalid) setIsShow(!isShow);
            labelObj = [];
          }}
        >
          <input type='hidden' value={selectValueId} name={nameId} ref={refId} />
          <input type='hidden' value={selectValue} name={nameValue} ref={refValue} />
          <input
            // disabled="disabled"
            defaultValue={defaultValue}
            className='text '
            maxLength={maxLength}
            readOnly
            value={selectValue}
            {...restProps}
          />
          <span className={`iconfont arrow ${isShow ? 'iconshouhui' : 'iconxiala1'}`} style={{color: isShow ? '#005ED4' : ''}} />

          <div className='select-box animated-fast fadeInDown' style={{display: isShow ? 'block' : 'none'}}>
            {max && (
              <div className='maxSelectBox'>
                <p>{isCn ? `最多选${max}项` : `Select ${max} items at most`}</p>
                <div style={{overflow: 'hidden'}}>
                  {selectArr &&
                    selectArr[0].map((item: any) => (
                      <Label
                        key={item}
                        titleName={item}
                        style={{
                          marginRight: '10px',
                          float: 'left',
                          marginTop: '10px',
                        }}
                        deleteBtnClick={(e: any) => {
                          const data = [...selectArr];
                          const i = data[0].indexOf(item);
                          data[0].splice(i, 1);
                          data[1].splice(i, 1);
                          setSelectArr(data);
                        }}
                        hasDelete
                      />
                    ))}
                </div>
              </div>
            )}
            <div className='rowbox' style={{width: `${insideWidth}px`}}>
              <ul className={`scrollbar col${col}`}>
                {selectData.map((item: any, index: number) => (
                  <li
                    className={indexOne === index ? 'actived' : ''}
                    key={`${Math.random()}${item.value}`}
                    onClick={(e) => {
                      firstClick(e, item, index);
                    }}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              {indexOne !== -100 && (
                <ul className={`scrollbar col${col}`} style={{borderRight: col === 3 ? '1px solid #E8E8E8' : ''}}>
                  {indexOne >= 0 &&
                    selectData[Number(indexOne)].children.map((item: { value: any; label: React.ReactNode }, index: number) => (
                      <li
                        className={indexTwo === index ? 'actived' : ''}
                        key={`${Math.random()}${item.value}`}
                        onClick={(e) => {
                          secondClick(e, item, index);
                        }}
                      >
                        {item.label}
                      </li>
                    ))}
                </ul>
              )}

              {indexTwo !== -100 && indexOne !== -100 && (
                <ul className={`scrollbar col${col}`}>
                  {indexTwo >= 0 &&
                    indexOne >= 0 &&
                    selectData[Number(indexOne)].children[Number(indexTwo)].children.map((item: any, index: number) => (
                      <li
                        key={`${Math.random()}${item.value}`}
                        onClick={(e) => {
                          thirdClick(e, item);
                        }}
                      >
                        {item.label}
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {max && (
              <div style={{padding: '15px', textAlign: 'right'}}>
                <Button titleName={isCn ? '取消' : 'Cancel'} />
                &nbsp;&nbsp;&nbsp;
                <Button
                  hollow
                  titleName={isCn ? '确定' : 'Confirm'}
                  onClick={(e) => {
                    if (selectArr[0].length === 0) {
                      e.stopPropagation();
                      // alert('至少选择一项');
                      Toast.info(isZh ? '至少选择一项' : 'Select at least one');
                    } else {
                      setSelectVlue(selectArr[0].join(' | '));
                      setSelectVlueId(selectArr[1].join('|'));
                      onChange && onChange(selectArr[0], selectArr[1]);
                    }
                    // ? alert('至少选择一项')
                    // : onChange(selectArr[0], selectArr[1]);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <p className='wrongText' style={{display: wrongText ? 'block' : 'none'}}>
        {wrongText}
      </p>
    </CascadeSelectContainer>
  );
});

CascadeSelect.defaultProps = {
  col: 1,
  placeholder: '请选择',
  onChange: () => {},
  // cancelBtnClick: () => {},
  // saveBtnClick: () => {},
  // maxOnChange: () => {},
};

CascadeSelect.propTypes = {
  type: PropTypes.string,
  // value: PropTypes.node,
  placeholder: PropTypes.string,
  titleName: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  wrongText: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  width: PropTypes.number,
  dataApi: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  col: PropTypes.number,
  insideWidth: PropTypes.number,
  invalid: PropTypes.bool,
  // name: PropTypes.node,
  max: PropTypes.number,
  lang: PropTypes.string,
};

export default CascadeSelect;
