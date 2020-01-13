import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import LabelContainer from './style';

const labels = React.forwardRef((props, ref) => {
  const { listData, name, multiple, selectArray, onClick } = props;
  const [value, setValue] = useState(selectArray.map(Number));

  useEffect(() => {
    setValue(value);
  }, [value]);
  return (
    <LabelContainer>
      <input type="hidden" value={value} name={name} ref={ref} />
      {listData.map((item, index) => (
        <span
          role="button"
          tabIndex="0"
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
            onClick(value);
          }}
        >
          {item.name}
        </span>
      ))}
    </LabelContainer>
  );
});

labels.defaultProps = {
  listData: ['不限', '商科'],
  selectArray: [0],
  onClick: () => {},
  multiple: true,
};

labels.propTypes = {
  listData: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.node,
  // selectIndex: PropTypes.num,
  selectArray: PropTypes.array,
  multiple: PropTypes.bool,
};

export default labels;
