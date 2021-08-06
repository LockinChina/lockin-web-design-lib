import styled from 'styled-components';

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div {
    /* border: 1px solid red; */
    flex: 1;
    /* display: flex; */
    /* flex-direction: column; */
    .top {
      display: flex;
      flex-direction: row;
      align-items: center;
      .disc {
        display: inline-block;
        border-radius: 20px;
        max-width: 100px;
        font-size: 15px;
        color: #666;
      }
      .solid {
        flex: 1;
        height: 1px;
        font-size: 0;
        margin: 0 30px;
        background-color: #ccc;
      }
    }
    .content {
      padding-top: 10px;
      margin-right: 30px;
      font-size: 14px;
      line-height: 1.5;
      color: #777;
      max-width: 150px;
    }
    &:last-child {
      flex: none;
      .solid {
        flex: none;
        display: none;
      }
      .content {
        margin-right: 0px;
      }
    }
  }
  & > div.actived {
    .disc {
      color: #0d6efd;
    }
    .solid {
      background-color: #0d6efd;
    }
  }
`;

export default StepsContainer;
