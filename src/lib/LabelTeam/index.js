import React from 'react';

import PropTypes from 'prop-types';
import LabelContainer from './style';

const labels = React.forwardRef((props, ref) => {
  const { listData, onClick, name, selectIndex, multiple, selectArray } = props;
  return (
    <LabelContainer>
      <input type="hidden" value="" name={name} ref={ref} />
      {listData.map((item, index) => (
        <div
          role="button"
          tabIndex="0"
          className={`${
            (multiple
            ? selectArray.indexOf(index) !== -1
            : selectIndex === index)
              ? 'isSelect'
              : ''
          }`}
          key={`${index + 1}label`}
          onClick={() => onClick(item)}
        >
          {item}
        </div>
      ))}
    </LabelContainer>
  );
});

labels.defaultProps = {
  listData: ['不限', '商科'],
  selectArray: [],
  onClick: () => {},
  multiple: true,
};

labels.propTypes = {
  listData: PropTypes.array,
  onClick: PropTypes.func,
  name: PropTypes.node,
  selectIndex: PropTypes.num,
  selectArray: PropTypes.array,
  multiple: PropTypes.bool,
};

export default labels;
