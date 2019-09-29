import React, {useState, useEffect} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import PropTypes from 'prop-types';

import SliderContainer from './sliderStyle';

// const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Handle = Slider.Handle;

const skillArr = [
  {name: '知道', text: '知道该技能，但是没有详细了解过'},
  {name: '了解', text: ' 详细了解过该技能，但是还不能独立完成工作'},
  {name: '熟悉', text: '可以使用该技能独立完成工作'}, 
  {name: '精通', text: '可以使用该技能，完成高级／复杂的工作'},
  {name: '神通', text: '可以培训其他人该技能'},
]

function setSkillText (value) {
  if(value >= 0 && value <= 20 ){
    return [skillArr[0].name, skillArr[0].text]
  } 
  else if(value > 20 && value <= 40){
    return [skillArr[1].name, skillArr[1].text]
  }
  else if(value > 40 && value <= 60){
    return [skillArr[2].name, skillArr[2].text]
  }
  else if(value > 60 && value <= 80){
    return [skillArr[3].name, skillArr[3].text]
  }
  else{
    return [skillArr[4].name, skillArr[4].text]
  }
}

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={`\v\v${setSkillText(value)[0]}\v\v`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle { ...restProps} />
    </Tooltip>
  );
};

const Sliders = React.forwardRef(function (props, ref){
  
  const {
    min, max, initValue, onChange, disabled, name, width, value, titleName
  } = props;
  const [skillNumber, setSkillNumber] =  useState(value);

  useEffect (()=> {
    setSkillNumber(value)
  },[value])

  return (
    <SliderContainer className={disabled ? "row": ""}>
    <p style={{display: titleName ? "block" : "none"}} className="titleName">{titleName}</p>
    <input type="hidden" defaultValue={initValue} name={name} ref={ref} />
    <div className="skillslider" style={{width: width}}>
      <Slider
        min={min}
        max={max}
        defaultValue={initValue}
        value = {value}
        handle={handle}
        railStyle={{ backgroundColor: '#f4f4f4', height: 10 }}
        trackStyle={{ backgroundColor: '#013370', height: 10 }}
        handleStyle={{
          border: 'none',
          height: 20,
          width: 20,
          marginLeft: 0,
          marginTop: -6,
          backgroundColor: '#ff800d',
          boxShadow: 'none'
        }}
        dotStyle={{
          display: 'none',
          backgroundColor: 'red'
        }}
        disabled={disabled}
        onChange={(value) => {
          setSkillNumber(value);
          onChange(value);
        }}
      />
    </div>
    <p className="skellP">{setSkillText(skillNumber)[0]}: {setSkillText(skillNumber)[1]}</p>
    </SliderContainer>
  )
})

Sliders.defaultProps = {
  min:0,
  max: 100,
  width: 500,
  initValue: 0,
  disabled: false,
  onChange: ()=> {}
}

Sliders.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  initValue: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.node,
  width: PropTypes.number,
  value: PropTypes.number,
  titleName: PropTypes.string
}

export default Sliders;