import styled from 'styled-components';

const SchoolSelectContainer = styled.div`
  position: relative;
  .select-box {
    position: absolute;
    z-index: 9;
    top: 38px;
    left: 0;
    width: 100%;
    .rowbox {
      display: flex;
      min-width: 100%;
      flex-direction: row;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 4px 0px rgba(136, 136, 136, 0.2);
      border-radius: 0px 0px 3px 3px;
      border: 1px solid rgba(213, 213, 213, 1);
    }
    ul {
      max-height: 296px;
      overflow-y: auto;
      width: 100%;
    }
    li {
      font-size: 12px;
      font-weight: 400;
      color: rgba(0, 0, 153, 1);
      line-height: 17px;
      a {
        b {
          font-weight: 800;
          color: red;
          font-size: 14px;
        }
        padding: 10px 14px;
        display: block;
        &.actived,
        &.actived:hover {
          background: #e7f1ff;
        }
        :hover {
          background: #f9f9f9;
        }
      }
    }
  }
`;

export default SchoolSelectContainer;
