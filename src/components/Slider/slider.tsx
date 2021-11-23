/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';

import SliderContainer from './sliderStyle';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
const {Handle} = Slider;

const skillArr = [
  {name: '知道', text: '知道该技能，但是没有详细了解过'},
  {name: '了解', text: ' 详细了解过该技能，但是还不能独立完成工作'},
  {name: '熟悉', text: '可以使用该技能独立完成工作'},
  {name: '精通', text: '可以使用该技能，完成高级／复杂的工作'},
  {name: '神通', text: '可以培训其他人该技能'},
];
const skillArrEn = [
  {
    name: 'Understand',
    text: 'Know the skill in detail, but can not apply it on your own',
  },
  {name: 'Know', text: 'Know the skill, but did not learn it in detail'},
  {name: 'Familiar', text: 'can apply the skill to work independently'},
  {name: 'Proficient', text: 'can apply the skill to finish complex works'},
  {name: 'Master', text: 'can train other people the skill'},
];


export interface SliderProps {
  min?: number; // 最小值
  max?: number; // 最大值
  onChange?: (val: number) => void; // onChange 事件
  disabled?: boolean; // 失效   用于回显状态
  lang?: 'zh' | 'en' | 'cn';
  name?: any; // useForm name
  defaultValue?: number; // 默认值
  width?: number; // 设置宽度
  titleName?: string; // 标题
  wrongText?: string; // 错误文本
}

const Sliders = React.forwardRef((props: SliderProps, ref: any) => {
  const {
    min,
    max,
    onChange,
    disabled,
    lang,
    name,
    defaultValue,
    width,
    // value,
    titleName,
  } = props;
  const isCn = lang === 'cn';
  const setSkillText = (value: any) => {
    if (value >= 0 && value <= 20) {
      return [skillArr[0].name, skillArr[0].text];
    }
    if (value > 20 && value <= 40) {
      return [skillArr[1].name, skillArr[1].text];
    }
    if (value > 40 && value <= 60) {
      return [skillArr[2].name, skillArr[2].text];
    }
    if (value > 60 && value <= 80) {
      return [skillArr[3].name, skillArr[3].text];
    }
    if (value > 80 && value <= 100) {
      return [skillArr[4].name, skillArr[4].text];
    }
    return [skillArr[0].name, skillArr[0].text];
  };
  const setSkillTextEn = (value: any) => {
    if (value >= 0 && value <= 20) {
      return [skillArrEn[0].name, skillArrEn[0].text];
    }
    if (value > 20 && value <= 40) {
      return [skillArrEn[1].name, skillArrEn[1].text];
    }
    if (value > 40 && value <= 60) {
      return [skillArrEn[2].name, skillArrEn[2].text];
    }
    if (value > 60 && value <= 80) {
      return [skillArrEn[3].name, skillArrEn[3].text];
    }
    if (value > 80 && value <= 100) {
      return [skillArrEn[4].name, skillArrEn[4].text];
    }
    return [skillArrEn[0].name, skillArrEn[0].text];
  };

  const handle = (props: any) => {
    const {value, dragging, index, ...restProps} = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={`\v\v${
          isCn ? setSkillText(value)[0] : setSkillTextEn(value)[0]
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
    <SliderContainer>
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
        <div className="skillslider" style={{width}}>
          <Slider
            min={min}
            max={max}
            value={skillNumber}
            handle={handle}
            railStyle={{height: 10}}
            trackStyle={{backgroundColor: '#013370', height: 10}}
            handleStyle={{
              border: 'none',
              height: 20,
              width: 20,
              marginLeft: 0,
              marginTop: -6,
              backgroundColor: '#ff800d',
              boxShadow: 'none',
            }}
            dotStyle={{
              display: 'none',
              backgroundColor: 'red',
            }}
            disabled={disabled}
            onChange={(value) => {
              setSkillNumber(value);
              onChange && onChange(value);
            }}
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
        {isCn && (
          <p className="skellP">
            {setSkillText(skillNumber)[0]}: {setSkillText(skillNumber)[1]}
          </p>
        )}
        {!isCn && (
          <p className="skellP">
            {setSkillTextEn(skillNumber)[0]}: {setSkillTextEn(skillNumber)[1]}
          </p>
        )}
        {/* <p className="skellP">
          {setSkillText(skillNumber)[0]}: {setSkillText(skillNumber)[1]}
        </p> */}
      </div>
    </SliderContainer>
  );
});

Sliders.defaultProps = {
  min: 0,
  max: 100,
  width: 500,
  // initValue: 0,
  disabled: false,
  onChange: () => {},
};


Sliders.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  // initValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.node,
  width: PropTypes.number,
  // value: PropTypes.number,
  titleName: PropTypes.string,
};

Sliders.displayName = 'Sliders';

export default Sliders;
