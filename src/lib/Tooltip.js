import React, { Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TipContent = styled.div`
  position: relative;
  :hover > .tip {
    display: block;
  }
  > .tip {
    position: absolute;
    background: #fff;
    border-radius: 4px;
    display: none;
    left: -51px;
    bottom: 30px;
    padding: 10px 0 5px;
    border: 1px solid #f8f8f8;
    -webkit-box-shadow: 0 2px 10px 0 rgba(149, 149, 149, 0.3);
    -moz-box-shadow: 0 2px 10px 0 rgba(149, 149, 149, 0.3);
    box-shadow: 0 3px 10px 0 rgba(149, 149, 149, 0.3);
  }
`;
function ToolTip(props) {
  const { contentNode, children } = props;
  return (
    <TipContent>
      {Children.toArray(children)}
      <div className="tip">{contentNode}</div>
    </TipContent>
  );
}

ToolTip.propTypes = {
  contentNode: PropTypes.node,
  // visible: PropTypes.bool,
  children: PropTypes.node,
};

export default ToolTip;
