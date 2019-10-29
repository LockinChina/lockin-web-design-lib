import React, { Children } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TipContent = styled.div`
  position: relative;
  height: ${props => (props.height ? `${props.height}px` : '')};
  cursor: pointer;
  :hover > .tip {
    display: block;
  }
  > .tip {
    position: absolute;
    background: #fff;
    border-radius: 4px;
    display: none;
    left: ${props => (props.NodeWidth ? `-${props.NodeWidth / 2}px` : '')};
    bottom: ${props => (props.height ? `${props.height + 15}px` : '')};
    width: ${props => (props.NodeWidth ? `${props.NodeWidth}px` : '')};
    padding: 10px 0 5px;
    border: 1px solid #f8f8f8;
    -webkit-box-shadow: 0 2px 10px 0 rgba(149, 149, 149, 0.3);
    -moz-box-shadow: 0 2px 10px 0 rgba(149, 149, 149, 0.3);
    box-shadow: 0 3px 10px 0 rgba(149, 149, 149, 0.3);
    > i {
      position: absolute;
      bottom: -5px;
      left: ${props => (props.NodeWidth ? `${props.NodeWidth / 2}px` : '')};
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #fff;
    }
  }
`;
function ToolTip(props) {
  const { contentNode, children, width, height, NodeWidth } = props;
  return (
    <TipContent width={width} height={height} NodeWidth={NodeWidth}>
      {Children.toArray(children)}
      <div className="tip">
        {contentNode}
        <i />
      </div>
    </TipContent>
  );
}

ToolTip.propTypes = {
  contentNode: PropTypes.node,
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
  NodeWidth: PropTypes.number,
};

export default ToolTip;
