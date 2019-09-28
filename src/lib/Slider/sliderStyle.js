import styled from 'styled-components';

const SliderContainer = styled.div`
  .titleName{
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(51,51,51,1);
    line-height: 20px;
    margin-bottom: 10px;
  }
  &.row{
    display: flex;
    flex-direction: row;
    align-items: center;
    .skellP{
      margin-left: 20px;
    }
  }
  .skillslider{ margin-left: 10px;}
  .skellP{
    white-space: nowrap;
    font-size: 12px;
    color: #959595;
    line-height: 20px;
    height: 25px;
    margin-top: 10px;
  }
  .rc-slider-handle{
    width: auto!important;
    padding-left: 10px!important;
    padding-right: 10px;
    background: red;
  }
  .rc-slider-disabled{
    background: none;
    .rc-slider-handle{
      opacity: 0;
      display: none !important;
      :hover{
        cursor: default;
      }
    }
  }
`

export default SliderContainer;