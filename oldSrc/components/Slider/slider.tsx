import React, {FC, useState, useEffect} from 'react';
import SliderContent from './style';
import classNames from 'classnames';
import GlobalStyle from '../globalStyle';
import Slider, {Range, SliderTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';

export interface SliderProps {
  className?: string;
  style?: React.CSSProperties;
  min?: number;
  max?: number;
  value?: number;
  lang?: 'cn' | 'en';
  disabled?: boolean;
  onSelectCallback?: (val: number) => void;
  dotStyle?: React.CSSProperties;
}

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


const Sliders: FC<SliderProps> = (props) => {
  const {className, style, min, disabled, max, onSelectCallback, value, dotStyle} = props;

  // const [skillObj, setSkillObj] = useState<any>([]);
  const [valueNumber, setValue] = useState( value || 0);

  const classes = classNames(className, {});

  const onChangeCallback = (val: number) => {
    setValue(val);
    onSelectCallback && onSelectCallback(val);
  };

  useEffect(() => {
    if (value && typeof value === 'number') {
      setValue(value);
    }
  }, [value]);

  // useEffect(() => {
  //   if (lang === 'cn') {
  //     setSkillObj(skillArr);
  //   } else {
  //     setSkillObj(skillArrEn);
  //   }
  // }, [lang]);

  // const renderSkillTip = (val: number) => {
  //   if (val >0 && val <=20) {
  //     return [skillObj[0].name, skillObj[0].text];
  //   }
  //   if (val> 20 && val <=40) {
  //     return [skillObj[1].name, skillObj[1].text];
  //   }
  //   if (val> 40 && val <=60) {
  //     return [skillObj[2].name, skillObj[2].text];
  //   }
  //   if (val> 60 && val <=80) {
  //     return [skillObj[3].name, skillObj[3].text];
  //   }
  //   if (val> 80 && val <=100) {
  //     return [skillObj[4].name, skillObj[4].text];
  //   }
  // };


  return (
    <>
      <SliderContent className={classes} style={style}>
        {/* <SliderTooltip overlay /> */}
        <Slider min={min} max={max}
          railStyle={{height: 10}}
          value={valueNumber}
          trackStyle={{backgroundColor: '#0d6efd', height: 10}}
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
          onChange={(val) => onChangeCallback(val)}
        />
        {/* <Range step={10} /> */}
      </SliderContent>
      <GlobalStyle />
    </>
  )
  ;
};

Sliders.defaultProps = {
  min: 0,
  value: 0,
  max: 100,
  lang: 'cn',
};

export default Sliders;
