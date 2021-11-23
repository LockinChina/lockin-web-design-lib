/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState, FC} from 'react';
import {Input, InputProps} from '../Input/input';
import classNames from 'classnames';
import axios from 'axios';
import SchoolSelectContent from './style';
import Loading from '../Loading';
import GlobalStyle from '../globalStyle';

export interface SchoolSelectProps extends InputProps {
  defaultValue?: string;
  className?: string;
  style?: React.CSSProperties;
  onSelect?: (data: object) => void;
  emptyMessage?: string;
}


const SchoolSelect: FC<SchoolSelectProps> = (props) => {
  const {className, style, defaultValue, onSelect, emptyMessage, ...restProps} = props;

  const classes = classNames(className, {});

  const [inputValue, setInputValue] = useState(defaultValue || ''); // value
  const [onFocus, setOnFocus] = useState(false); // 搜索列表是否为空
  const [showLoading, setShowLoading] = useState(false); // 查询第一级学校列表loading;
  const [fetchScroolDataList, setFetchSchoolDataList] = useState<any>([]); // 查询到的学校列表
  const [schoolDataActive, setSchoolDataActive] = useState(-1);

  let timer: NodeJS.Timeout | null = null;

  // 第一步 输入关键词后查询学校列表；
  const onChangEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    clearTimeout(Number(timer));
    setSchoolDataActive(-1);
    timer = setTimeout(() => {
      setShowLoading(true);
      axios.get(`http://smartschoolsearch.lockinu.com/suggest?search=${value}`)
          .then((res) => {
            if (res) {
              const data = res.data;
              if (data && data.length > 0) {
                setOnFocus(false);
              } else {
                setOnFocus(true);
              }
              setFetchSchoolDataList(data);
            }
            setShowLoading(false);
          })
          .catch((error) => {
            setShowLoading(false);
            setOnFocus(true);
          });
    }, 500);
  };

  // 第二步 感觉当前学校名 查询学校详情;
  const fetchSchoolDetail = (keyWords: string) => {
    const words = encodeURI(keyWords?.replace(/<[^>]*>/g, ''));
    axios.get(`http://smartschoolsearch.lockinu.com/querySchool?search=${words}`)
        .then((res)=> {
          const {data} = res;
          if (data) {
            setInputValue(data.schoolName);
            if (onSelect) {
              onSelect(data);
            }
          }
        }).catch((error) => {
          // console.log(error);
        });
  };

  // 设置学校查询列表为空
  const removeSchoolDataList = () => {
    setTimeout(() => {
      setFetchSchoolDataList([]);
    }, 200);
    setSchoolDataActive(-1);
  };


  // 键盘事件
  const keyDownCallback = (e: {key: string}) => {
    const key = e.key;
    if (fetchScroolDataList?.length > 0) {
      const length = fetchScroolDataList.length;
      // 下键盘
      if (key === 'ArrowDown') {
        if (schoolDataActive === (length - 1) || schoolDataActive == -1 ) {
          setSchoolDataActive(0);
        } else {
          setSchoolDataActive( schoolDataActive + 1 );
        }
      }
      // 上键盘
      if (key === 'ArrowUp') {
        if (schoolDataActive === -1 || schoolDataActive === 0) {
          setSchoolDataActive(length - 1);
        } else {
          setSchoolDataActive( schoolDataActive - 1 );
        }
      }

      // 回车
      if (key === 'Enter' && schoolDataActive !== -1) {
        const selectWords = fetchScroolDataList[schoolDataActive]?.term;
        fetchSchoolDetail(selectWords);
        removeSchoolDataList();
        // console.log(InputRef.current.value);
        const inputDom = document.getElementById('inputDom');
        if (inputDom) {
          inputDom.blur();
        }
      }
    }
  };


  useEffect(() => {
    //
    return () => {
      clearTimeout(Number(timer));
    };
  }, []);

  return (
    <>
      <SchoolSelectContent className={classes} style={style}>
        <Input
          id="inputDom"
          value={inputValue}
          onChange={(e) => onChangEvent(e)}
          onKeyUp={keyDownCallback}
          onBlur={() => {
            removeSchoolDataList();
            setOnFocus(false);
          }}
          {...restProps}
        />
        {fetchScroolDataList &&
          fetchScroolDataList.length > 0 &&
          <ul className="fetch-item-list">
            {showLoading && <Loading className="loading" size="1x" color="blue" />}
            {fetchScroolDataList.map((item:{term: string}, index: number) => {
              return (
                <li
                  className={index === schoolDataActive ? 'actived' : ''}
                  key={item.term} dangerouslySetInnerHTML={{__html: item.term}}
                  onClick={ () => {
                    fetchSchoolDetail(item.term);
                    removeSchoolDataList();
                  }}
                />
              );
            })}
          </ul>
        }
        {
          // 暂无数据
          onFocus && (
            <div className="empty-item">{emptyMessage}</div>
          )
        }
      </SchoolSelectContent>
      <GlobalStyle />
    </>
  );
};
SchoolSelect.defaultProps = {
  emptyMessage: '暂无搜索结果，请更换搜索关键词。',
};

export default SchoolSelect;
