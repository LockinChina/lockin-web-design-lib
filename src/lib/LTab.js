import React from "react";
import styled, { css } from 'styled-components';
import PropTypes from "prop-types";

const TabDiv = styled.div`
  font-size: 18px;
  font-weight:400;
  color:rgba(0,0,153,1);
  line-height:25px;
  padding: 10px 30px;
  margin-right: 30px;
  position: relative;
  cursor: pointer;
  ${props => (props.select && css`
    &:before {
        position: absolute;
        content: '';
        left: 50%;
        bottom: 0;
        width: 30px;
        height: 4px;
        border-radius: 2px;
        background-color: rgba(0,0,153,1);
        margin-left: -15px;
    }
  `)}
`;

const LTab = ({ data, selectIndex, onClick }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {data.map((item, index) => (
                <TabDiv key={'LTab' + index} select={Number(index) === Number(selectIndex)} onClick={onClick}>{item.name}</TabDiv>
            ))}
        </div>
    )

};

LTab.propTypes = {
    data: PropTypes.array,
    selectIndex: PropTypes.number,
    onClick: PropTypes.func,
};

export default LTab;
