import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 12px;
  > div {
    &:hover {
      /*  */
    }
    cursor: default;
    background: #fff;
    border: 1px solid #888;
    box-sizing: border-box;
    border-radius: 14px;
    line-height: 26px;
    padding: 0 15px;
    display: flex;
    color: #595959;
    align-items: center;
    .deleteBtn {
      &:hover {
        cursor: pointer;
        background: #005ed4;
        border: 1px solid #005ed4;
      }
      display: inline-block;
      height: 16px;
      width: 16px;
      color: #fff;
      background: #d8d8d8;
      line-height: 14px;
      text-align: center;
      margin-left: 4px;
      border-radius: 1px;
      border-radius: 14px;
      font-size: 12px;
      position: relative;
      left: 10px;
    }
  }
`;

export interface LabelProps {
  titleName: string; // 标题
  hasDelete?: boolean; // 是否显示删除按钮
  deleteBtnClick?: (e: any) => void; // 删除按钮事件
  style?: React.CSSProperties; // 样式
}

const Label: React.FC<LabelProps> = (props) => {
  const {titleName, hasDelete, deleteBtnClick, style} = props;
  return (
    <LabelContainer style={style}>
      <div>
        {titleName}
        {hasDelete && (
          <span onClick={(e) => deleteBtnClick && deleteBtnClick(e)} className='deleteBtn'>
            &times;
          </span>
        )}
      </div>
    </LabelContainer>
  );
};

export default Label;
