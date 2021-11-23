import styled from 'styled-components';

const LabelContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  font-size: 12px;
  flex-wrap: wrap;
  > span {
    //&:hover {
    //  border: 1px solid #000099;
    //  color: #000099;
    //}
    width: auto;
    cursor: pointer;
    background: #fff;
    border: 1px solid #888;
    box-sizing: border-box;
    line-height: 22px;
    border-radius: 3px;
    padding: 0 12px;
    display: flex;
    color: #595959; 
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    outline: none;
  }
  > span.isSelect {
    border: 1px solid #000099;
    color: #000099;
  }
`;
export default LabelContainer;
