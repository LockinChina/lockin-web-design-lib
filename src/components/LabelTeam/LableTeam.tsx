import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import LabelContainer from './style';

export interface LabelsProps {
  listData?: {name: string, id: number}[]; // 数据
  name?: any;
  multiple?: boolean; // 为 true时
  selectArray?: any[]; // 选中的标签 id
  onClick?: (value: any ) => void; // 点击事件
}

const Labels = React.forwardRef((props: LabelsProps, ref: any) => {
  const {listData, name, multiple, selectArray, onClick} = props;

  const [value, setValue] = useState<any>(selectArray && selectArray.map(Number));

  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <LabelContainer>
      <input type="hidden" value={value} name={name} ref={ref} />
      {listData && listData.map((item, index) => (
        <span
          role="button"
          className={`${value.includes(item.id) ? 'isSelect' : ''}`}
          key={`${index + 1}label`}
          onClick={() => {
            if (multiple) {
              if (index === 0) {
                setValue([0]);
              } else if (value.includes(item.id)) {
                const values = [...value];
                values.splice(values.indexOf(item.id), 1);
                if (value.includes(0)) {
                  values.splice(values.indexOf(0), 1);
                }
                setValue(values);
              } else {
                const values = [...value];
                values.push(item.id);
                if (value.includes(0)) {
                  values.splice(values.indexOf(0), 1);
                }
                setValue(values);
              }
            } else {
              setValue(item.id);
            }
            onClick && onClick(value);
          }}
        >
          {item.name}
        </span>
      ))}
    </LabelContainer>
  );
});

Labels.defaultProps = {
  listData: [{name: 'Beijing', id: 0}, {name: 'Shanghai', id: 12}],
  selectArray: [0],
  onClick: () => {},
  multiple: true,
};

Labels.displayName = 'Labels';

export default Labels;
