import styled from 'styled-components';

const RangeContainer = styled.div`
  .titleName {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
    margin-bottom: 10px;
  }
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    .skellP {
      margin-left: 20px;
    }
  }
  .skillslider {
    margin-left: 10px;
  }
  .skellP {
    white-space: nowrap;
    font-size: 12px;
    color: #959595;
    margin-top: 10px;
    text-align: center;
  }
  .rc-slider-track {
    background-color: ${props => props.mainColor ? props.mainColor : '#000099'};
  }
  .rc-slider-handle,
  .rc-slider-handle:hover,
  .rc-slider-handle:focus {
    //background: #000099;
    border-color: ${props =>
    props.mainColor ? props.mainColor : '#000099'};;
  }
  .rc-slider-dot-active {
    border-color: ${props =>
    props.mainColor ? props.mainColor : '#000099'};;
  }
  .rc-slider-disabled {
    background: none;
    .rc-slider-handle {
      opacity: 0;
      display: none !important;
      :hover {
        cursor: default;
      }
    }
  }
`;

export default RangeContainer;
