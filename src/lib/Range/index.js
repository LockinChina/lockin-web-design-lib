/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';

import RangeContainer from './style';

const { Handle } = Slider;

const Ranges = React.forwardRef((props, ref) => {
  const {
    min,
    max,
    onChange,
    disabled,
    lang,
    name,
    name1,
    defaultValue,
    width,
    mainColor,
    // value,
    titleName,
  } = props;
  const isCn = lang === 'cn';
  const marksTextCn = {
    0: '无经验',
    10: '1年',
    20: '2年',
    30: '3年',
    40: '4年',
    50: '5年',
    60: '6年',
    70: '7年',
    80: '8年',
    90: '9年',
    100: '10年',
    110: '以上',
  };

  const marksTextEn = {
    0: 'No Experience',
    10: '1',
    20: '2',
    30: '3',
    40: '4',
    50: '5',
    60: '6',
    70: '7',
    80: '8',
    90: '9',
    100: '10',
    110: 'Above',
  };
  const marksCn = {
    0: { name: '无经验', value: '无工作经验' },
    10: { name: '1年', value: '一年' },
    20: { name: '2年', value: '两年' },
    30: { name: '3年', value: '三年' },
    40: { name: '4年', value: '四年' },
    50: { name: '5年', value: '五年' },
    60: { name: '6年', value: '六年' },
    70: { name: '7年', value: '七年' },
    80: { name: '8年', value: '八年' },
    90: { name: '9年', value: '九年' },
    100: { name: '10年', value: '十年' },
    110: { name: '以上', value: '十年以上' },
  };

  const marksEn = {
    0: { name: 'No Experience', value: '无工作经验' },
    10: { name: '1', value: '一年' },
    20: { name: '2', value: '两年' },
    30: { name: '3', value: '三年' },
    40: { name: '4', value: '四年' },
    50: { name: '5', value: '五年' },
    60: { name: '6', value: '六年' },
    70: { name: '7', value: '七年' },
    80: { name: '8', value: '八年' },
    90: { name: '9', value: '九年' },
    100: { name: '10', value: '十年' },
    110: { name: 'Above', value: '十年以上' },
  };
  const setSkillText = value => marksCn[value].name;
  const setSkillTextEn = value => marksEn[value].name;
  const setSkillValue = value => marksEn[value].value;

  const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={`\v\v${
          isCn ? setSkillText(value) : setSkillTextEn(value)
        }\v\v`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle {...restProps} />
      </Tooltip>
    );
  };
  const [skillNumber, setSkillNumber] = useState(defaultValue[0]);
  const [skillNumber1, setSkillNumber1] = useState(defaultValue[1]);

  useEffect(() => {
    setSkillNumber(defaultValue[0]);
    setSkillNumber1(defaultValue[1]);
  }, [defaultValue]);

  return (
    <RangeContainer mainColor={mainColor}>
      {disabled !== false && (
        <p
          style={{
            display: titleName ? 'block' : 'none',
            marginBottom: disabled ? '0px' : '10px',
          }}
          className="titleName"
        >
          {titleName}
        </p>
      )}
      <input
        type="hidden"
        value={setSkillValue(skillNumber)}
        name={name}
        ref={ref}
      />
      <input
        type="hidden"
        value={setSkillValue(skillNumber1)}
        name={name1}
        ref={ref}
      />
      <div className={disabled ? 'row' : ''}>
        <div className="skillslider" style={{ width }}>
          <p className="skellP">
            {isCn
              ? `${setSkillText(skillNumber)} - ${setSkillText(skillNumber1)}`
              : `${setSkillTextEn(skillNumber)} -
              ${setSkillTextEn(skillNumber1)}`}
          </p>
          <Range
            min={min}
            max={max}
            defaultValue={[skillNumber, skillNumber1]}
            step={10}
            count={10}
            marks={isCn ? marksTextCn : marksTextEn}
            handle={handle}
            handleStyle={{
              border: 'none',
              height: 15,
              width: 15,
              marginLeft: 0,
              marginTop: -6,
              backgroundColor: '#000099',
              boxShadow: 'none',
            }}
            // dotStyle={{
            //   backgroundColor: '#fff',
            //   width: 15,
            //   height: 15,
            //   bottom: -5,
            // }}
            disabled={disabled}
            onChange={value => {
              setSkillNumber(value[0]);
              setSkillNumber1(value[1]);
              onChange(value);
            }}
            pushable
          />
        </div>
        <p
          style={{
            marginTop: '5px',
            color: '#ff5252',
            fontSize: '12px',
            lineHeight: '17px',
          }}
        >
          {props.wrongText}
        </p>
      </div>
    </RangeContainer>
  );
});

Ranges.defaultProps = {
  min: 0,
  max: 110,
  width: 600,
  // initValue: 0,
  disabled: false,
  defaultValue: [0, 0],
  onChange: () => {},
};

Ranges.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  // initValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.node,
  name1: PropTypes.node,
  width: PropTypes.number,
  // value: PropTypes.number,
  titleName: PropTypes.string,
  lang: PropTypes.string,
  mainColor: PropTypes.string,
  defaultValue: PropTypes.array,
};

export default Ranges;
