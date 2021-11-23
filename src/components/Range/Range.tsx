import React, {useState, useEffect} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';

// const { Handle } = Slider;
const marks = {
  0: '无经验',
  1: '1年',
  2: '2年',
  3: '3年',
  4: '4年',
  5: '5年',
  6: '6年',
  7: '7年',
  8: '8年',
  9: '9年',
  10: '10年',
  11: {
    style: {whiteSpace: 'nowrap'},
    label: <strong>以上</strong>,
  },
};
const marksE = {
  0: `No Experience`,
  1: '1 year',
  2: '2 year',
  3: '3 year',
  4: '4 year',
  5: '5 year',
  6: '6 year',
  7: '7 year',
  8: '8 year',
  9: '9 year',
  10: '10 year',
  11: {
    style: {whiteSpace: 'nowrap'},
    label: <strong>Above</strong>,
  },
};


const marksCn:any = {
  0: {name: '无经验', value: '无工作经验'},
  1: {name: '1年', value: '一年'},
  2: {name: '2年', value: '两年'},
  3: {name: '3年', value: '三年'},
  4: {name: '4年', value: '四年'},
  5: {name: '5年', value: '五年'},
  6: {name: '6年', value: '六年'},
  7: {name: '7年', value: '七年'},
  8: {name: '8年', value: '八年'},
  9: {name: '9年', value: '九年'},
  10: {name: '10年', value: '十年'},
  11: {name: '以上', value: '十年以上'},
};
// export default function Sliders({ defaultValue }) {

export interface RangeProps {
  defaultValue: any[]; // 默认值 数组 无工作经验 - 十年以上
  nameMin?: string; // useForm name
  nameMax?: string; // useForm name
  refMin?: any; // useForm ref
  refMax?: any; // useForm ref
  locale?: 'zh' | 'en';
}

const Range = React.forwardRef((props: RangeProps) => {
  const {defaultValue, nameMin, nameMax, refMin, refMax, locale} = props;
  const [value, setValue] = useState([0, 0]);
  const isCn = locale === 'zh';
  useEffect(() => {
    if (defaultValue && defaultValue.length > 0 && defaultValue) {
      setValue([setN(defaultValue[0]), setN(defaultValue[1])]);
      // getComputedSliderText(selectValue());
      // console.log([setN(defaultValue[0]), setN(defaultValue[1])]);
    }
  }, [defaultValue]);
  const setN = (n: React.ReactText) => {
    if (n === '无工作经验') {
      return 0;
    }
    if (n === '一年') {
      return 1;
    }
    if (n === '两年') {
      return 2;
    }
    if (n === '三年') {
      return 3;
    }
    if (n === '四年') {
      return 4;
    }
    if (n === '五年') {
      return 5;
    }
    if (n === '六年') {
      return 6;
    }
    if (n === '七年') {
      return 7;
    }
    if (n === '八年') {
      return 8;
    }
    if (n === '九年') {
      return 9;
    }
    if (n === '十年') {
      return 10;
    }
    return 11;
  };
  const log = (val: React.SetStateAction<number[]>) => {
    setValue(val);
  };
  useEffect(() => {
    // getComputedSliderText(selectValue());
  }, [value]);
  const selectValue = () => {
    const min = value[0];
    const max = value[1];
    if (min === 0 && max <= 10) {
      if (min === 0 && max === 0) {
        return isCn ? '无经验' : 'No Experience';
      }
      return `${max}${isCn ? '年工作经验' : ' Work year'}`;
    }
    if (min > 0 && max <= 10) {
      if (min === max) {
        return `${max}${isCn ? '年工作经验' : ' Work year'}`;
      }
      return `${min}-${max}${isCn ? '年工作经验' : ' Work year'}`;
    }
    if (min === 0 && max === 11) {
      return isCn ? '不限工作经验' : 'No Experience';
    }
    if (min > 0 && min !== 11 && max === 11) {
      return `${min}${isCn ? '年以上工作经验' : 'Work year above'}`;
    }
    return `10${isCn ? '年以上工作经验' : 'Work year above'}`;
  };
  return (
    <div className="mb20" style={{padding: '0 20px'}}>
      <div className="tc mb10 f-color-75">{selectValue()}</div>
      <input
        style={{
          position: 'absolute',
          opacity: 0,
          height: 0,
          width: 0,
          overflow: 'hidden',
        }}
        type="text"
        name={nameMin}
        ref={refMin}
        value={marksCn[value[0]].value}
      />
      <input
        style={{
          position: 'absolute',
          opacity: 0,
          height: 0,
          width: 0,
          overflow: 'hidden',
        }}
        type="text"
        name={nameMax}
        ref={refMax}
        value={marksCn[value[1]].value}
      />
      <Slider.Range
        min={0}
        max={11}
        marks={isCn ? marks : marksE}
        step={11}
        onChange={log}
        value={value}
      // dotStyle={{ background: '#009', width: '2px', borderRadius: 0 }}
      // activeDotStyle={{ background: '#009', borderColor: '#009' }}
      />
    </div>
  );
});

Range.propTypes = {
  nameMin: PropTypes.string,
  nameMax: PropTypes.string,
  refMin: PropTypes.object,
  refMax: PropTypes.object,
};

Range.displayName ='Range';

export default Range;
