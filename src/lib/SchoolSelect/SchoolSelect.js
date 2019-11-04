import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import InputV from '../Input/InputV';
import SchoolSelectContainer from './SchoolSelectStyle';

let timer = null;

// eslint-disable-next-line no-unused-vars
const SchoolSelect = React.forwardRef((props, ref) => {
  const {
    // value,
    placeholder,
    titleName,
    defaultValue,
    wrongText,
    // onChange,
    invalid,
    // name,
    api,
    isUpload,
    emptyMessage,
  } = props;
  const [schoolData, setSchoolData] = useState([]); // 获取到的学校数据
  const [sValue, setVlaue] = useState('');
  const [sValueId, setSValueId] = useState('');
  // const [se, setSe] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (defaultValue && defaultValue.length === 2) {
      setVlaue(defaultValue[0].join(' | '));
      setSValueId(defaultValue[1]);
    } else {
      setVlaue(defaultValue);
    }
  }, [isUpload]);

  useEffect(() => {
    // eslint-disable-next-line func-names
    document.onclick = () => {
      setIsShow(false);
    };
    clearTimeout(timer);
    timer = setTimeout(() => {
      axios.post(`${api}${sValue}`).then(res => {
        if (res.status === 200) {
          const { data } = res;
          // console.log(res);
          if (data && data.response && data.response.docs) {
            if (data.response.docs.length > 0) {
              setSchoolData(data.response.docs);
            } else {
              setSchoolData([]);
              // setSe(true);
            }
          } else {
            setSchoolData([]);
            // setSe(true);
          }
        }
      });
    }, 300);
  }, [sValue, api]);

  return (
    <SchoolSelectContainer>
      <input
        type="hidden"
        name={props.nameId}
        ref={props.refId}
        value={sValueId}
      />
      <input
        type="hidden"
        name={props.nameValue}
        ref={props.refValue}
        value={sValue}
      />
      <InputV
        titleName={titleName}
        defaultValue={defaultValue}
        placeholder={placeholder}
        wrongText={wrongText}
        invalid={invalid}
        value={sValue}
        onChange={val => {
          // props.inputChange(val);
          setVlaue(val);
          setSValueId('');
          setIsShow(true);
        }}
        // eslint-disable-next-line react/no-children-prop
        children={
          <div
            className="select-box"
            style={{ display: isShow ? 'block' : 'none' }}
          >
            <div className="rowbox animated-fast fadeInDown">
              <ul>
                {schoolData.length === 0 && (
                  <p
                    style={{
                      padding: '30px 0',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#757575',
                    }}
                  >
                    {emptyMessage}
                  </p>
                )}
                {schoolData.map((item, index) => {
                  if (index < 10) {
                    return (
                      <li key={item.id}>
                        <a
                          href="javascirpt:;"
                          onClick={() => {
                            setIsShow(false);
                            // onChange(item.schoolName, item.id);
                            setVlaue(item.schoolName);
                            setSValueId(item.id);
                          }}
                        >
                          {item.schoolName}
                        </a>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        }
      />
    </SchoolSelectContainer>
  );
});

SchoolSelect.defaultProps = {
  titleName: '',
  wrongText: '',
  invalid: false,
  // onChange: () => { },
  // inputChange: () => { },

  api: `${process.env.API}/schoolSearch?s=`,
  emptyMessage: '暂无搜索结果，请更换搜索关键词。或直接在输入框中添加大学',
};

SchoolSelect.propTypes = {
  // value: PropTypes.string,
  placeholder: PropTypes.string,
  titleName: PropTypes.string,
  defaultValue: PropTypes.string,
  wrongText: PropTypes.string,
  // onChange: PropTypes.func,
  invalid: PropTypes.bool,
  // name: PropTypes.node,
  api: PropTypes.node,
  nameId: PropTypes.string,
  refId: PropTypes.object,
  nameValue: PropTypes.string,
  refValue: PropTypes.object,
  isUpload: PropTypes.node,
  // inputChange: PropTypes.func,
  emptyMessage: PropTypes.string,
};

export default SchoolSelect;
