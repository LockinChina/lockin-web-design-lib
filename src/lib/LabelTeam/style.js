import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 12px;
  > div {
    &:hover {
      border: 1px solid #000099;
      color: #000099;
    }
    cursor: pointer;
    background: #fff;
    border: 1px solid #888;
    box-sizing: border-box;
    border-radius: 3px;
    line-height: 22px;
    padding: 0 12px;
    display: flex;
    color: #595959;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    outline: none;
  }
  > div.isSelect {
    border: 1px solid #000099;
    color: #000099;
  }
`;
export default LabelContainer;
