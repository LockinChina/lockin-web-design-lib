import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const EditSpan = styled.span`
  height: 28px;
  line-height: 28px;
  padding: 4px 15px;
  font-size: 14px;
  background: rgba(255, 255, 255, 1);
  border-radius: 14px;
  border: 1px solid rgba(139, 139, 139, 1);
  color: rgba(139, 139, 139, 1);
  text-align: center;
  cursor: pointer;
  &:hover {
    color: rgba(76, 138, 235, 1);
    border: 1px solid rgba(76, 138, 235, 1);
  }
  &:hover > span:last-child {
    background: rgba(76, 138, 235, 1);
  }
  &:active {
    color: rgba(0, 0, 153, 1);
    border: 1px solid rgba(0, 0, 153, 1);
  }
  &:active > span:last-child {
    background: rgba(0, 0, 153, 1);
  }
`;
const NormalSpan = styled.span`
  height: 26px;
  background: rgba(255, 255, 255, 1);
  border-radius: 14px;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 153, 1);
  padding: 4px 15px;
  color: rgba(0, 0, 153, 1);
`;

const DeleteIcon = styled.span`
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  background: rgba(139, 139, 139, 1);
  border-radius: 50%;
  color: #fff;
  text-align: center;
  display: inline-block;
  margin-left: 15px;
`;
function LEditableLabel(props) {
  const { text, removable, onClick } = props;
  if (removable) {
    return (
      <EditSpan onClick={() => onClick()}>
        <span>{text}</span>
        <DeleteIcon>&times;</DeleteIcon>
      </EditSpan>
    );
  }
  return <NormalSpan>{text}</NormalSpan>;
}

LEditableLabel.propTypes = {
  text: PropTypes.string,
  removable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default LEditableLabel;
