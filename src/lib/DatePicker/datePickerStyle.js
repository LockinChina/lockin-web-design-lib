import styled from 'styled-components';
import CascadeSelectContainer from '../CascadeSelect/cascadeSelectStyle';

const DatePickerContainer = styled(CascadeSelectContainer)`
  .select-box {
    background: green;
    height: 162px;
    .rowbox {
      ul {
        max-height: 162px;
        overflow-y: auto;
        li {
          display: flex;
          height: 36px;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 17px;
          padding: 0 0;
          color: #000;
        }
      }
      ul:nth-child(1) {
        width: 80px;
        border-right: 1px solid #e8e8e8;
      }
      ul:nth-child(2) {
        flex: 1;
        background: rgba(0, 0, 0, 0.01);
        li {
          height: 25%;
          float: left;
          width: 33.333%;
        }
      }
      ul:nth-child(3) {
        width: 56px;
        border-left: 1px solid #e8e8e8;
      }
    }
  }
`;
export default DatePickerContainer;
