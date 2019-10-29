import React, { useState, useEffect } from 'react';
import SchoolSelect from '../../lib/SchoolSelect/SchoolSelect';
import { GrayBox, Ptit, Space } from '../../globalDemoStyle';

export default function SchoolSelectDemo() {
  const [value, setVlaue] = useState('');
  useEffect(() => {
    setVlaue('北京大学');
  }, []);
  return (
    <div>
      <GrayBox>
        <Ptit>学校选择:</Ptit>
        <Space />
        <SchoolSelect
          titleName="xxx"
          // defaultValue={value}
          defaultValue={value}
          // onChange={(name, id) => {
          //   setVlaue(name, id);
          //   // console.log(id);
          // }}
          worngText="xx1"
        />
      </GrayBox>
    </div>
  );
}
