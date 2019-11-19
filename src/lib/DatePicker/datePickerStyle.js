import styled from 'styled-components';
import CascadeSelectContainer from '../CascadeSelect/cascadeSelectStyle';

const DatePickerContainer = styled(CascadeSelectContainer)`
  .select-box {
    background: green;
    height: 225px;
    .closebox {
      text-align: right;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid rgba(213, 213, 213, 1);
      .close {
        font-size: 15px;
        color: #000099;
        border: none;
        background: none;
      }
    }
    .rowbox {
      ul {
        max-height: 225px;
        overflow-y: auto;
        li {
          display: flex;
          height: 50px;
          justify-content: center;
          align-items: center;
          font-size: 15px;
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
