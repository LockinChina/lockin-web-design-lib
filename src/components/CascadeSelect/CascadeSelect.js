import React, { useState, useEffect } from 'react';
import CascadeSelectContainer from './cascadeSelectStyle';
import axios from 'axios';

let labelObj = [];
let valueObj = [];


export default function CascadeSelect(props) {
  const {
    value,
    placeholder,
    titleName,
    defaultValue,
    wrongText,
    onChange,
    maxLength,
    width,
    api,
    col,
    insideWidth,
    ref,
    invalid
  } = props;
  const [selectValue, setSelectVlue] = useState(value); // 

  const [selectData, setSelectData] = useState([]); // 数据源
  const [indexOne, setIndexOne] = useState(-100); //第一级索引
  const [indexTwo, setIndexTwo] = useState(-100); // 第二级索引
  const [isShow, setIsShow] = useState(false); // 显示隐藏

  useEffect ( function getSelectData() {
    if(api){
      if(typeof api === 'string'){
        axios.get(api)
          .then(res => {
              let data = res.data;
              setSelectData(data);
          })
          .catch(erro => {console.log(erro)})
      }else{
        setSelectData(api);
      }
    }
  },[api]);

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (e.target && e.target.matches('li')) {
        return;
      }
      setIsShow(false);
    })
    setSelectVlue(value);
  }, [value])

  const firstClick = (e, item, index) => {
    e.stopPropagation();
    labelObj[0] = item.label;
    let children = selectData[index].children;
    if (children && children.length !== 0) {
      setIndexOne(index);
      setIndexTwo(-100)
    } else {
      valueObj = item.value;
      setIsShow(false)
      onChange(labelObj, valueObj)
      console.log(labelObj, valueObj);
    }
  }
  const secondClick = (e, item, index) => {
    e.stopPropagation();
    labelObj[1] = item.label;
    console.log(typeof labelObj);
    let children = selectData[indexOne].children[index].children;
    if (children && children.length > 0) {
      setIndexTwo(index);
      console.log(`第二组index： ${index}, 第二组indexTwo: ${indexTwo}`)
    } else {
      setIsShow(false);
      valueObj = item.value;
      onChange(labelObj, valueObj)
      setIndexOne(-100);
    }
  }

  const thirdClick = (e, item, index) => {
    e.stopPropagation();
    labelObj[2] = item.label;
    valueObj = item.value;
    console.log(labelObj, valueObj);
    onChange(labelObj, valueObj)
    setIsShow(false)
    setIndexTwo(-100);
    setIndexOne(-100);
  }

  return (
    <CascadeSelectContainer style={{ width: `${width}px` }}>
      {/* <input type="hidden" value={col} /> */}
      <p className="title" style={{ display: titleName ? 'block' : 'none' }} >{titleName}</p>
      <div className="box" style={{ position: "relative" }}>
        <div className={"inputBody fadeAnim " + (isShow ? "openActive " : "") + (wrongText ? "textWrong " : "") + (invalid ?  "invalid " : "")} onClick={(e) => {
          if(!invalid)
          setIsShow(!isShow);
          labelObj = [];
        }}>
          <input
            disabled="disabled"
            defaultValue={defaultValue}
            placeholder={placeholder}
            className={"text "}
            maxLength={maxLength}
            readOnly="readOnly"
            value={selectValue}
            ref={ref}
          />
          <span className={"iconfont arrow " + (isShow ? "iconshouhui" : "iconxiala1") } style={{color: isShow ? "#005ED4" : ""}} ></span>

          <div className="select-box animated-fast fadeInDown" style={{ display: isShow ? 'block' : 'none' }}>
            <div className="rowbox" style={{ width: `${insideWidth}px` }}>
              <ul className={`col${col}`}>
                {selectData.map((item, index) => {
                  return (
                    <li
                      className={indexOne === index ? "actived" : ""}
                      key={item.value}
                      onClick={(e) => {
                        firstClick(e, item, index);
                      }}>
                      {item.label}
                    </li>
                  )
                })}
              </ul>
              {
                indexOne !== -100 &&
                <ul className={`col${col}`}>
                  {indexOne >= 0 && selectData[Number(indexOne)].children.map((item, index) => {
                    return (
                      <li
                        className={indexTwo === index ? "actived" : ""}
                        key={item.value}
                        onClick={(e) => {
                          secondClick(e, item, index);
                        }}>
                        {item.label}
                      </li>
                    )
                  })}
                </ul>
              }

              {
                indexTwo !== -100 && indexOne !== -100 &&
                <ul className={`col${col}`}>
                  {indexTwo >= 0 && indexOne >= 0 && selectData[Number(indexOne)].children[Number(indexTwo)].children.map((item, index) => {
                    return (
                      <li
                        key={item.value}
                        onClick={(e) => {
                          thirdClick(e, item, index);
                        }}>
                        {item.label}
                      </li>
                    )
                  })}
                </ul>
              }


            </div>
          </div>
        </div>
      </div>
      <p className="wrongText" style={{ display: wrongText ? "block" : "none" }}>{wrongText}</p>

    </CascadeSelectContainer>
  )
}


CascadeSelect.defaultProps = {
  type: "text",
  col: 1,
  placeholder: '请选择',
  onChange: () => { },
  rightIconOnClick: () => { }
}


