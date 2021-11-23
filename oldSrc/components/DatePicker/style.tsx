import styled from 'styled-components';

const DatePickerContent = styled.div`
  position: relative;
  .select-box{
    position: absolute;
    z-index: 9;
    left:0;
    top: 40px;
    height: 198px;
    width: 100%;
    overflow: hidden;
    display: none;
    background-color: #fff;
    border: 1px solid #ccc;
    .row-box{
      height: 198px;
      display: flex;
      flex-direction: row;
      ul{
        max-height: 198px;
        border-right: 1px solid #f1f1f1;
        li{
          cursor: pointer;
          &:hover{
            background-color: #f8f8f8;
          }
          &.actived{
            background-color: #0d6efd;
            color: #fff;
          }
        }
        &:nth-child(1),
        &:nth-child(3){
          overflow-y: auto;
          li {
            width: 80px;
            height: 36px;
            line-height: 36px;
            text-align: center;

          }
        }
        &:nth-child(2){
          flex: 1;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          &.disabled{
            opacity: .3;
            li{
              cursor: default;
              &:hover{
                background: transparent;
              }
            }
          }
          li{
            height:48px;
            width: 33.333333%;
            line-height: 48px;
            text-align: center;
          }
        }
        &:nth-child(3){
          &.disabled{
            opacity: .3;
            li{
              cursor: default;
              &:hover{
                background: transparent;
              }
            }
          }
        }
        &:last-child{
          /* border-right: none; */
        }
      }
    }
  }
  &.no-hover{
    .i-content{
      input{
        cursor: default;
      } 
    }
  }
  .i-content{
    input{
      cursor: pointer;
    } 
  }
  &.is-show{
    .select-box{
      display: block;
    }
  }
`;

export default DatePickerContent;
