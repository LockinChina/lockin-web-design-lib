import styled from 'styled-components';

const LabelsCheckBox = styled.div`
  button {
    display: inline-block;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    padding: 0 10px;
    border: 1px solid #e8e8e8;
    background: #fff;
    border-radius: 3px;
    margin: 4px;
    &.hide {
      display: none;
    }
    &.actived {
      border: 1px solid #000099;
      color: #000099;
    }
  }
`;

export default LabelsCheckBox;
