import styled from 'styled-components';

const SliderContent = styled.div`
  /* .rc-slider-handle {
    width: auto !important;
    padding-left: 10px !important;
    padding-right: 10px;
    background: red;
  } */
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

export default SliderContent;
