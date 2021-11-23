import styled from 'styled-components';

const MenuContent = styled.ul`
  display: flex;
  position: relative;
  z-index: 1;
  background-color: #fff;
  flex-direction: row;
  height:44px;
  > li.item{
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    height: 100%;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    & > span{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      height: 100%;
      font-size: 15px;
      font-weight: 500;
    }
    &.disabled{
      opacity: .5;
      cursor: no-drop;
    }
    &.hover{
      cursor: pointer;
    }
    &.actived::before{
      position: absolute;
      content:'';
      bottom: 0;
      left: 50%;
      margin-left: -15px;
      display: inline-block;
      width: 30px;
      height: 4px;
      background-color:#0d6efd;
      border-radius: 2px;
    }
    &.actived
    {
      color: #0d63fd;
    }
    & > .menu-subMenu{
      position: absolute;
      display: none;
      z-index: 9;
      top: 44px;
      left: 0;
      border: 1px solid #f1f1f1;
        & > li{
          color: #333;
          min-width: 200px;
          background-color: #fff;
          /* white-space: nowrap; */
          padding: 10px 16px;
          font-weight: 400;
          line-height: 1.5;
          &:hover{
            background-color: #f8f8f8;
            transition: all .2s ease-in;
          }
          &.disabled{
            color: #999;
          }
          &.disabled:hover{
            background-color: #fff;
            cursor: default;
          }
        }
    }
    &:hover .menu-subMenu{
      display: block;
    }
  }
`;

export default MenuContent;
