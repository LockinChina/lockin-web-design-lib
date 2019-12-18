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
    defaultValue,
    width,
    mainColor,
    // value,
    titleName,
  } = props;
  const isCn = lang === 'cn';
  const marksCn = {
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

  const marksEn = {
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
  const setSkillText = value => marksCn[value];
  const setSkillTextEn = value => marksEn[value];

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
  const [skillNumber, setSkillNumber] = useState(defaultValue);

  useEffect(() => {
    setSkillNumber(defaultValue);
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
      <input type="hidden" value={skillNumber} name={name} ref={ref} />
      <div className={disabled ? 'row' : ''}>
        <div className="skillslider" style={{ width }}>
          <p className="skellP">
            {isCn ? setSkillText(skillNumber) : setSkillTextEn(skillNumber)}
          </p>
          <Range
            min={min}
            max={max}
            defaultValue={[0, defaultValue]}
            step={10}
            count={10}
            marks={isCn ? marksCn : marksEn}
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
              setSkillNumber(
                Number(value[1] - value[0]) === 1 ? 0 : value[1] - value[0],
              );
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
  onChange: () => {},
};

Ranges.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  // initValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.node,
  width: PropTypes.number,
  // value: PropTypes.number,
  titleName: PropTypes.string,
  lang: PropTypes.string,
  mainColor: PropTypes.string,
};

export default Ranges;
