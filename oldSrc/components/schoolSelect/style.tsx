import styled from 'styled-components';

const SchoolSelectContent = styled.div`
  position: relative;
  /* width: 400px; */
  box-sizing: content-box;
  .fetch-item-list,
  .empty-item
  {
    position: absolute;
    top: 40px;
    width: 100%;
    background-color: #fff;
    z-index: 9;
    font-size: 14px;
    min-height: 40px;
    border: 1px solid  #ccc;
    .loading{
      width: 100%;
      display: block;
      padding: 10px;
      text-align: center;
    }
    & > li {
      line-height: 1.5;
      padding: 7px 10px;
      &:hover{
        cursor: pointer;
        background-color: #f8f8f8;
      }
      &.actived{
        background-color: #0d6efd;
        color: #fff;
      }
      & >b{
        color: #f73131;
      }
    }
  }
  .empty-item{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #757575;
    padding: 10px;
  }
`;

export default SchoolSelectContent;
