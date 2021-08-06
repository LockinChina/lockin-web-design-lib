import styled from 'styled-components';

const CascadeContent = styled.div`
  position: relative;
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
  .select-box{
    background-color: #fff;
    position: absolute;
    display: none;
    top: 40px;
    left: 0;
    width: 100%;
    .row-box{
      width: 100%;
      border: 1px solid #ccc;
      overflow: hidden;
      ul{
        width: 100%;
        float: left;
        font-size: 12px;
      }
      li{
        cursor: pointer;
        padding: 6px 10px;
        line-height: 1.5;
        &:hover{
          background: #f8f8f8;
        }
        &.actived{
          background-color: #0d6efd;
          color: #fff;
        }
      }
      &.first-row{
        ul{
          max-height: 250px;
          overflow-y: auto;
          li{
            text-align: center;
          }
        }
      }
      &.second-row{
        ul{
          width: 50%;
          height: 250px;
          overflow-y: auto;
          &:nth-child(1){
            border-right: 1px solid #ccc;
          }
        }
      }
      &.third-row{
        ul{
          width: 33.33333%;
          height: 250px;
          overflow-y: auto;
          &:nth-child(1),
          &:nth-child(2){
            border-right: 1px solid #ccc;
          }
          &:nth-child(2){
            background-color: #fafafa;
          }
        }
      }
    }
  }
  &.is-show{
    .select-box{
      display: block;
    }
  }
`;

export default CascadeContent;
