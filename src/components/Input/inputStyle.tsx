import styled from 'styled-components';

const InputContainer = styled.div`
  .text {
    font-size: 14px;
  }
  .title {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    margin-bottom: 5px;
  }
  .inputBody {
    position: relative;
    display: flex;
    flex-direction: row;
    border: 1px solid #a0a0a0;
    background: #fff;
    height: 36px;
    border-radius: 2px;
    width: 100%;
    align-items: center;
    &.active {
      border: 1px solid #005ed4;
    }
    &.textWrong {
      border: 1px solid #ff5252;
    }
    &.readOnlyOpacity {
      opacity: 0.6;
    }
    span:nth-child(1),
    span:last-child {
      font-family: 'iconfont', 'lockinu' !important;
    }
    span:nth-child(1) {
      ::before {
        margin: 0 0px 0 10px;
      }
    }
    span:last-child {
      ::before {
        margin: 0 10px 0 0;
        cursor: pointer;
      }
    }
    button:active {
      outline: none;
    }

    .text {
      flex: 1;
      box-sizing: border-box;
      padding: 8px 10px;
      line-height: 20px;
      padding: 8px 10px;
      background: none;
      border: none;
    }
  }
  .wrongText {
    margin-top: 5px;
    color: #ff5252;
    font-size: 12px;
    line-height: 17px;
  }
`;

export default InputContainer;
