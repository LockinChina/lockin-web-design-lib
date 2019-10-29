import React, { useState, useEffect } from 'react';
import SchoolSelect from '../../lib/SchoolSelect/SchoolSelect';
import { GrayBox, Ptit, Space } from '../../globalDemoStyle';

export default function SchoolSelectDemo() {
  const [value, setVlaue] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setVlaue([['北京大学'], [1]]);
  }, []);
  return (
    <div>
      <GrayBox>
        <Ptit onClick={() => setIndex(1)}>学校选择:</Ptit>
        <Space />
        {index === 1 && (
          <SchoolSelect
            titleName="xxx"
            // defaultValue={value}
            // defaultValue={value}
            // onChange={(name, id) => {
            //   setVlaue(name, id);
            //   // console.log(id);
            // }}
            worngText="xx1"
          />
        )}
      </GrayBox>
    </div>
  );
}
